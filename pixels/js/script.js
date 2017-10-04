$(document).ready(function(){
	$('.js-header__navbar').click(function(){
		if($('.nav').hasClass("hidden-sm")) {
			$('.nav').removeClass("hidden-sm");
		} else {
			$('.nav').addClass("hidden-sm");
		}
	});

	$('.tickets-section').mousemove(function(e){
	    var x = -(e.pageX + this.offsetLeft) / 20;
	    var y = -(e.pageY + this.offsetTop) / 20;
	    $(this).css('background-position', x + 'px ' + y + 'px');

	    

  	}); 

	$('.js-unlimited').click(function(){
		if($('.js-limited').hasClass("viewed")) {
			$('.js-limited').removeClass("viewed");
			$(this).addClass("viewed")
		}
	});
	$('.js-limited').click(function(){
		if($('.js-unlimited').hasClass("viewed")) {
			$('.js-unlimited').removeClass("viewed");
			$(this).addClass("viewed")
		}
	});

	
});



