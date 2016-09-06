$(function(){
//获取元素
var win=$(".banner")[0];//窗口
var as=$("li",win)//img

var point=$(".btn-list")[0];

var lis=$("li",point);
var button=$(".button")[0]
var btnL=$(".btn-left")[0];

var btnR=$(".btn-right")[0];
var widths=parseInt(getStyle(as[0],"width"))

/*(双下标)无缝轮播
  num   记录当前窗口的图片的下标
  next  记录即将显示的图片的下标
  在动画之前下一张图片就位  left=width+"px"
  num left=-width+"px"
  next left=0
  更新
  num=next
*/
/***************************/
/*双下表定义*/
var num=0;
var next=0;
var flag=true;
/*/初始化/*/
for (var i = 0; i < lis.length; i++) {
	if (i==0) {
		continue;
	};
   as[i].style.left=widths+"px";
};

/*自动轮播**********************/
var t=setInterval(moveL,3000)
/*选项卡*/
for (var i = 0; i < lis.length; i++) {
	lis[i].index=i;
	lis[i].onclick=function(){
     if(num==this.index){
      return;
     }
    as[this.index].style.left=widths+"px";
    lis[num].className="";
    lis[this.index].className="item";
    animate(as[num],{left:-widths});
    animate(as[this.index],{left:0});
    num=this.index;
    next=this.index;
	}
};
/*********************/
  function moveL(){
  	next++;
  	/*判断最后一张后，将第一张给了next*/
  	if (next==as.length) {
  		next=0;
  	};
  	/*动画前下一张就位*/
  	as[next].style.left=widths+"px";
  	/*给点点变色*/	
  	lis[num].className="";
  	lis[next].className="item";
  	/*动画*/
  	/*动画当前第一张*/
  	animate(as[num],{left:-widths});
  	/*动画下一张*/
  	animate(as[next],{left:0},function() {
  		flag=true;
  	});
  	/*更新*/
  	num=next;
  	 
  }
  function moveR(){
  	next--;
  	/*判断最后一张后，将第一张给了next*/
  	if (next<0) {
  		next=as.length-1;
  	};
  	/*动画前下一张就位*/
  	as[next].style.left=-widths+"px";
  	/*给点点变色*/	
  	lis[num].className="";
  	lis[next].className="item";
  	/*动画*/
  	/*动画当前第一张*/
  	animate(as[num],{left:widths});
  	/*动画下一张*/
  	animate(as[next],{left:0},function(){
  		flag=true;
  	});
  	/*更新*/
  	num=next;
  	
  }
win.onmouseover=function(){
       clearInterval(t)
        }
win.onmouseout=function(){
     t=setInterval(moveL,3000)
        }
btnL.onclick=function(){
  clearInterval(t)
	if (flag) {
		flag=false;
		moveR();
	   };
   }
btnR.onclick=function(){   
  clearInterval(t)
    if (flag) {
		flag=false;
		moveL();
	   };
    }

})