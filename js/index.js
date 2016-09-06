$(function(){
	$('.navbox .nav-center .nav .search').on('click',function(e){
		e.preventDefault();
		$('.nav .mac').addClass('menu1')
		$('.nav .ipad').addClass('menu1')
		$('.nav .iphone').addClass('menu1')
		$('.nav .watch').addClass('menu1')
		$('.nav .tv').addClass('menu1')
		$('.nav .music').addClass('menu1')
		$('.nav .support').addClass('menu1')
		$('.nav .search').addClass('menu1')
		$('.nav .bag').addClass('action')
	    $('.search-box').addClass('action') 
	    $('.curtain').addClass('action') 
	    $('.list-box').addClass('action')  
	    $('.copyright-box').addClass('action')
	    $('.search-box .search-top .text').addClass('action')
	    $('.search-bottom .title').addClass('action')
	    $('.search-box .search-content .content').addClass('action')
	    $('.navbox .nav-center .nav .bag .zuo').addClass('action')
	    $('.navbox .nav-center .nav .bag .you').addClass('action')
	})
	$('.banner-box').on('mouseover',function(){
		$('.banner-box .button').addClass('block')
	})
	$('.banner-box').on('mouseout',function(){
		$('.banner-box .button').removeClass('block')
	})
	$('.navbox .nav-center .nav .bag').on('click',function(){
		$('.nav .mac').removeClass('menu1')
		$('.nav .ipad').removeClass('menu1')
		$('.nav .iphone').removeClass('menu1')
		$('.nav .watch').removeClass('menu1')
		$('.nav .tv').removeClass('menu1')
		$('.nav .music').removeClass('menu1')
		$('.nav .support').removeClass('menu1')
		$('.nav .search').removeClass('menu1')
		$('.nav .bag').removeClass('action')
	    $('.search-box').removeClass('action') 
	    $('.curtain').removeClass('action') 
	    $('.list-box').removeClass('action')  
	    $('.copyright-box').removeClass('action')
	})
	$('.navbox .nav-center .nav-phone .menu').on('click',function(e){
		e.preventDefault();
		$('.navbox .nav-center .nav-phone .menu .shang').toggleClass('action')
		$('.navbox .nav-center .nav-phone .menu .xia').toggleClass('action')
		$('.curtain').toggleClass('action1')
		$('.nav-phone').toggleClass('action1')
		$('.nav-phone .bag1').toggleClass('action1')
		$('.list-box').toggleClass('action')  
	    $('.copyright-box').toggleClass('action')
	    $('.search-box .search-top .text').toggleClass('action')
	    $('.search-bottom .title').toggleClass('action')
	    $('.search-box .search-content .content').toggleClass('action')
	    $('.navbox .nav-center .nav-phone .phone-content .phone-list .item').toggleClass('active')
	    $('.navbox .nav-center .nav-phone .phone-content .phone-list').toggleClass('active')
	})
  $('.nav-copyright .col .list h3').on('click',function(){
    $('.nav-copyright .col .list').toggleClass('active')
  })
    //轮播
/*    var move=function(n,dir){
    	var active=$('.banner-box .banner .active');
    	active.addClass(dir)
    	       .delay(800)   //动画用了0.8s,0.8s后动画已经完成，则这时就可以执行队列中的移除类名的函数
    	       .queue(function(){
    	       	   $(this)
    	       	    .removeClass(dir)
                    .removeClass('active')
                    .dequeue()
    	       })
    var oppose=('dir'==='left')?'right':'left';
    	$(n).addClass(oppose)
    	$(n).get(0).offsetWidth;    //强制浏览器绘制一张，
    	$(n).addClass('active')    //使用户可以看到translateX的效果
    	    .removeClass('oppose');                       
    	    
    }
     
    var left=$('.banner-box .button .btn-left');
    var right=$('.banner-box .button .btn-right');
    var images=$('.banner .banner-img');
    left.on('click',function(){
    	alert(1)
    	var active=$('.banner-box .banner .active');
    	if(active.prev().length){
    		var n=active.prev();
    	}else{
    		var n=images.eq(-1)
    	}
    	move(n,'right');
    })
    right.on('click',function(){
    	var active=$('.banner-box .banner .active');
    	if(active.next().length){
    		var n=active.next();
    	}else{
    		var n=images.eq(0);
    	}
    	move(n,'left');
    })
    */
    	var magicmove=function(n,dir){
		// n 第几张
	    //dir direction   方向
	    var active=$(".banner-box .banner .active");
	    active.addClass(dir)
	           .delay(800)                //用来延迟时间，用来延迟队列中函数的执行时间
	           .queue(function(){         //是一个函数队列
	           	$(this).removeClass('active')
	           	.removeClass(dir)
	           	.dequeue()
              flag=true;
	           })
	  var op = (dir==='left')?'right':'left';
         $(n).addClass(op) 
	    //强制浏览器绘制
	    $(n).get(0).offsetWidth;
	    $(n).removeClass(op);
        $(n).addClass('active');
	    $('.banner-box .btn-list li').removeClass('item')
	       .eq(items.index(n))
	       .addClass('item')    
	}
	var left=$(".banner-box .button .btn-left");
	var right=$(".banner-box .button .btn-right");
  var flag=true;
	var items=$(".banner-box .banner .banner-img");
    left.on('click',function(){
      if (flag) {
        flag=false;
      var active=$(".banner-box .banner .active");
      if (active.prev().length) {
        var n=active.prev();
      }else{
        var n=items.eq(-1);
      }
      magicmove(n,'right')
      };
    
    });
    right.on('click',function(){
      if (flag) {
        flag=false;
      var active=$(".banner-box .banner .active");
      if (active.next().length) {
        var n=active.next();
      }else{
        var n=items.eq(0);
      }
      magicmove(n,'left')
      };
    
    });


    $(".btn-list li").on('click',function(){
      var n=items.eq($(this).index());
      var present=items.index($(".banner-box .banner .active"))    //present当前，获取当前显示的
      if ($(this).index()>present) {           //$(this).index()  记录该点击对象在其父元素中的位置
        magicmove(n,'left')
      } else if($(this).index()<present){
         magicmove(n,'right')
      }else if($(this).index()===present){
        return;
      };
    	$('.btn-list li').removeClass('action')
    	$(this).addClass('action');
    })
    var t=setInterval(function(){right.trigger('click'); },2000)
    $('.banner-box').on('mouseover',function(){
       clearInterval(t)
    })
    $('.banner-box').on('mouseout',function(){
       t=setInterval(function(){right.trigger('click'); },2000)
    })
/*$(document).on('mousewheel',function(e){
  var fangxiang=e.originalEvent.deltaY;
  if (fangxiang>1) {
    left.trigger('click')
  };
  if (fangxiang<1) {
    right.trigger('click')
  };
})*/   
})