$(function(){
	$(".nav > ul > li").hover(
		function(){
			$(this).parent().addClass("over");
		},
		function(){
			$(this).parent().removeClass("over");
		}
	);

	$(".nav > ul > li").focusin(function(){
		$(this).addClass("over");
	});

	$(".nav > ul > li").focusout(function(){
		$(this).removeClass("over");
	});

	$(".nav > ul > li:first-child").focusin(function(){
		$(this).parent().addClass("over");
	});

	$(".nav li:last-child li:last-child").focusout(function(){
		$(this).parent().parent().removeClass("over");
		$(this).parent().parent().parent().removeClass("over");
	});

	let w;
	let total=4;
	let amount=0;

	$(window).resize(function(){
		w=$(window).width();

		if(w > 1200){
			distance=w;
		}
		else{
			distance=1200;
		}

		$(".slider .slider_image").css({ width: distance*total });
	});

	$(window).trigger("resize");

	$(".direction .left").click(function(e){
		e.preventDefault();

		if($(".slider_image").is(":animated")){
			return false;
		}

		$(".slider_image").prepend($(".slider_image li").last());
		amount-=distance;
		$(".slider_image").css({ left: amount });

		amount+=distance;
		$(".slider_image").animate({ left: amount }, 500);
	});

	$(".direction .right").click(function(e){
		e.preventDefault();

		if($(".slider_image").is(":animated")){
			return false;
		}

		amount-=distance;

		$(".slider_image").animate({ left: amount }, 500, function(){
			$(this).append($(".slider_image li").first());
			amount+=distance;
			$(this).css({left : amount});
		});
	});
});