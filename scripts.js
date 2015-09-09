var main = function() {

	var activeContent = "profile"

	$(".nav a").click(function() {

		var buttonClicked = this.id
		var previousContent = activeContent
		newContent = buttonClicked.substring(4, buttonClicked.length)
		if (newContent == previousContent) {

		} else {
			$('html, body').animate({scrollTop : 0},200);
			$("#nav-" + newContent).parent('li').addClass("active");
			$("#nav-" + previousContent).parent('li').removeClass("active");
			$("#content-" + previousContent).toggle();
			$("#content-" + newContent).toggle();
			activeContent = newContent;
			return false;
		};
	});

	$('#nav').affix({

		offset: { 
			top: $('#nav').offset().top 
			}


	});

	$('#nav-wrapper').height($("#nav").height());
	$('#nav').width($("#body-container").width());

	$(window).on('resize', function(){
		$('#nav').width($("#body-container").width());
	});

	
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('.scroll-to-top').fadeIn('slow');
		} else {
			$('.scroll-to-top').fadeOut('slow');
		}
	});
	
	$('.scroll-to-top').click(function(){
		$('html, body').animate({scrollTop : 0},600);
		return false;
	});
};

$(document).ready(main);