(function(){//扩展系统方法
	if(typeof String.prototype.trim!='function'){
		String.prototype.trim=function(){
			return this.replace(/(^\s*)|(\s*$)/g,"");
		}
	}
	if(typeof Array.prototype.forEach!='function'){
		Array.prototype.forEach=function(callback,obj){
			for(var i=0,len=this.length;i<len;i++){
				callback.call(obj,this[i],i,this);
			}
		}
	}
	if(typeof Array.prototype.every!='function'){
		Array.prototype.every=function(callback,obj){
			for(var i=0,len=this.length;i<len;i++){
				if(!callback.call(obj,this[i],i,this)) return false;
			}
			return true;
		}
	}
})();


//validator v1.0.0 2015/10/19
function $$(id){
	return new function(id){
		var self=this;
		this.form=document.getElementById(id);
		this.inputs=this.form.elements;
		this.rules={
			username:{
				reg:/^[_a-zA-Z]\w{5,9}$/,
				required:true
			},
			email:{
				reg:/^\w+@\w+\.\w+(\.\w+)?$/
			},
			phone:{
				reg:/^1[3-8]\d{9}$/,
				required:true
			}
		};
		this.validator=function(config){
			var key='',
				conRul=null,
				one=null;
			Array.prototype.forEach.call(this.inputs,function(item,i,arr){
				key=self.getdata(item,'validate');
				conRul=config&&config.rules&&config.rules[key]||{};
				if(key){
					self.rules[key]=self.rules[key]||config[key]||{};
					one=self.rules[key];
					one.reg=conRul.reg||self.rules[key].reg||/./;
					one.required=conRul.required||self.rules[key].required||false;
					one.msgEle=self.getMsgEle(item,'msg'||config.msg);
					one.ele=item;
					one.validated=false;
					item.onblur=function(){
						var k=self.rules[self.getdata(this,'validate')];
						if(k.reg.test(this.value.trim())||(!this.value.trim()&&!k.required)){
							k.msgEle.style.display='none';
							k.validated=true;
						}else{
							k.msgEle.style.display='inline';
							k.validated=false;
						}
					}
				}
			});
			this.form.onsubmit=function(){
				var notValidated=[];
				for(var k in self.rules){
					self.rules[k].ele.onblur();
					if(!self.rules[k].validated) notValidated.push(k);
				}
				if(!notValidated.length){
					config.success&&config.success();
				} else {
					config.fail&&config.fail(notValidated);
					return false;
				}
			};
		};
		this.getdata=function(ele,key){
			if(ele.dataset){
				this.getdata=function(ele,key){
					return ele.dataset[key];
				};
				return ele.dataset[key];
			}else{
				this.getdata=function(ele,key){
					return ele.getAttribute('data-'+key);
				};
				return ele.getAttribute('data-'+key);
			}
		};
		this.getMsgEle=function(ele,className){
			var list=ele.parentNode.getElementsByTagName("*");
			for(var i=0,len=list.length;i<len;i++){
				if(list[i].className.match(new RegExp('(^|\\s)'+className+'(\\s|$)'))) return list[i];
			}
			return null;
		};
	}(id);
}




//插件调用
$$('myform').validator({
	rules:{
		phonecode:{
			reg:/^\d{6}$/,
			required:true
		}
	},
	success:function(){
		alert('验证成功');
	},
	fail:function(data){
		alert(data+',验证失败');
	}
});
