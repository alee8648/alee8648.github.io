var main = function() {

	var activeContent = "profile"

	$(".nav a").click(function() {

		var buttonClicked = this.id
		var previousContent = activeContent
		newContent = buttonClicked.substring(4, buttonClicked.length)
		if (newContent == previousContent) {

		} else {
			$("#nav-" + newContent).parent('li').addClass("active");
			$("#nav-" + previousContent).parent('li').removeClass("active");
			$("#content-" + previousContent).toggle();
			$("#content-" + newContent).toggle();
			activeContent = newContent;
		};
	});

	$('#nav').affix({

		offset: { 
			top: $('#nav').offset().top 
			}


	});

	$('#nav-wrapper').height($("#nav").height());
	$('#nav').width($("#body-container").width());
};

$(document).ready(main);