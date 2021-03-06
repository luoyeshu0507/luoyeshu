(function(global){
	function getUrlSearch(name) {
		var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]); return null;
	}
	global.getWinxinUserInfo=function(callback){
		var code=getUrlSearch('code');
		if(!code){
			location.href="https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxbf14eaec418da50e&redirect_uri=http://www.luoyeshu.com/demo/weixinlogin/&response_type=code&scope=snsapi_userinfo&state=123#wechat_redirect";
			return;
		}
        $.ajax({
            url:'gettoken.php',
            data:{'code':code},
            type:"POST",
            dataType:"json",
            error:function(e){
            		alert('get token error');
            },
            success:function(data){
//				alert(JSON.stringify(data));
				var val={};
				val.token=data.access_token;
				val.openid=data.openid;
				getuserinfo(val);
            }
        });
        function getuserinfo(data){
	        $.ajax({
	            url:'getuserinfo.php',
	            data:data,
	            type:"POST",
	            dataType:"json",
	            error:function(e){
	            		alert('get userinfo error');
	            },
	            success:function(data){
					callback(data);
	            }
	        });
        }
	};
})(window||this);