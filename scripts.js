var main = function() {

	var activeContent = "profile"

	$(".nav a").click(function() {

		var buttonClicked = this.id
		var newActiveContent = buttonClicked.substring(4, buttonClicked.length)
		if (newActiveContent == activeContent) {

		} else {
			$("#nav-" + newActiveContent).parent('li').addClass("active");
			$("#nav-" + activeContent).parent('li').removeClass("active");
			$("#content-" + activeContent).fadeToggle("fast", function () {
				activeContent = newActiveContent;
				$("#content-" + activeContent).fadeToggle();
			});

		}

	});

};

$(document).ready(main);