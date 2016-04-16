var baiwan={
	list:null,
	which:7,  //默认中奖序号    0对应特等奖 1-6对应1-6等奖  7对应谢谢参与
	index:1,
	maxtimes:24,
	rank:[0,1,2,5,8,7,6,3],
	gift:[0,5,3,7,6,1,2,4],
	flag:true,
	pageinit:function(){
		$(".b-giftlist li .pointer").click(function(){
			if(baiwan.flag){
				baiwan.flag=false;
				baiwan.getluckgift(7);
			}
		});
		$(".b-gift-bag li").click(function(){
			var li=$(this);
			var msc='';
			var money=(li.index()+1)*5;
			if(li.hasClass("off")){
				msc='<strong class="rank">您已经领过此礼包！</strong>';
			}
			else if(li.hasClass("on")){
				msc='<em class="bg"></em><strong class="rank on">恭喜领取<span>'+money+'</span>元礼包成功！</strong>';
				li.removeClass("on").addClass("off").find("span").html("<span>"+money+"元新手礼包<br/><em>已领取</em></span>");
			}
			else{
				msc='<strong class="libao-off">至今为止，您的累计软件有效量为：<span>5</span>个，<br/>还未达到<span>'+money+'</span>元礼包领取资格,再接再励啊！</strong>'
			}
			baiwan.alertwindow(380,160,msc);
		});
	},
	getluckgift:function(n){  //抽奖
		baiwan.list=$("#b-giftlist li");
		baiwan.which=n;
		baiwan.maxtimes+=baiwan.gift[n];
		baiwan.roundgift(baiwan.index,baiwan.maxtimes);
	},
	roundgift:function(){  //抽奖
		var msc='';
		var times=parseInt($("#b-lefttimes span").html());
		if(times==0){
			msc='<strong class="rank">很遗憾，抽奖次数已经用完，明天还有机会哦！</strong>';
			baiwan.alertwindow(360,160,msc);
			baiwan.flag=true;
			return;
		}
		if(baiwan.maxtimes!=0){
			baiwan.maxtimes--;
			baiwan.list.removeClass("on").eq(baiwan.rank[baiwan.index]).addClass("on");
			baiwan.index++;
			if(baiwan.index==8) baiwan.index=0;
			window.setTimeout(baiwan.roundgift,50);
		}else{
			baiwan.maxtimes=24;
			switch(baiwan.which){
				case 0: msc="恭喜您，抽中了<span>特等奖</span>！";break;
				case 1: msc="恭喜您，抽中了<span>一等奖</span>！";break;
				case 2: msc="恭喜您，抽中了<span>二等奖</span>！";break;
				case 3: msc="恭喜您，抽中了<span>三等奖</span>！";break;
				case 4: msc="恭喜您，抽中了<span>四等奖</span>！";break;
				case 5: msc="恭喜您，抽中了<span>五等奖</span>！";break;
				case 6: msc="恭喜您，抽中了<span>六等奖</span>！";break;
				default: msc="很遗憾，本次没有中奖，请再接再厉！"; break;
			}
			msc='<strong class="rank">'+msc+'</strong>';
			baiwan.index=1;
			baiwan.alertwindow(360,160,msc);
			$("#b-lefttimes span").html(times-1);
			baiwan.flag=true;
		}
	},
	alertwindow:function(width,height,str){  //弹窗
		if($("#screen").length==0){
			var bg=$("<div id='screen'></div>");
			bg.height($(document).height());
			$("body").append(bg);
		}
		if($("#alert").length!=0){$("#alert").remove();}
		var alert='<div id="alert"><div class="info">'+str+'</div><a class="close" href="javascript:void(0)">确认</a></div>';
		$("body").append(alert);
		$("#alert").width(width).height(height).find(".close").click(function(){
			$("#alert,#screen").remove();return false;
		});
		baiwan.center("alert",width,height);
	},
	center:function(id,width,height){ //弹窗剧中
		var obj=$("#"+id);
		if(obj.length>0){
			$(window).on("scroll resize",function(){
				var top=$(document).scrollTop()+($(window).height()-height)/2;
				var left=($(window).width()-width)/2;
				obj.css({"top":top,"left":left});
			});
			$(window).trigger("scroll");
		}
	}
};
$(function(){
	baiwan.pageinit();
});
