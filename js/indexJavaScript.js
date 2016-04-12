//================ 用于标题栏中logo的切换和导航栏样式的改变=======================//
$(window).scroll(function() {
    if ($(".navbar").offset().top > 150) {
        $(".navbar-fixed-top").addClass("top-nav-collapse").find('img').attr('src','img/logo1.png');
        $("#nav_ul >li >a").addClass('nav-changeblack');
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse").find('img').attr('src','img/logo-white.png');
        $("#nav_ul >li >a").removeClass('nav-changeblack');
    }
});
//================ 用于微信图片的显示与隐藏=======================//
$(document).ready(function() {
	var $img_winxin = $("<img src='img/weixin.png'>")
	$img_winxin.addClass('img_winxin_css');
	/*$("#weixin").click(function(event) {
		$("#container-weixin").append($img_winxin);
	});*/

	// $("#weixin").hover(function() {
	// 	$("#container-weixin").append($img_winxin);
	// }, function() {
	// 	$img_winxin.remove();/* Stuff to do when the mouse leaves the element */
	// });
	var flag=1;
	$("#weixin").click(function(event) {
		if (flag==1) {
			$("#container-weixin").append($img_winxin);
			flag=0;
		}else{
			$img_winxin.remove();
			flag=1;
		}
	});
});


//==================== Intro Text Slider ========================//
$(document).ready(function(){
	  $('#intro-slider').flexslider({
	    animation: "fade",
	    controlNav: false,
	    DirectionNav: false,
	   slideshowSpeed: 4000,        
	    animationSpeed: 600  
	  });
});
