console.log("main.js linked");

$(window).scroll(() => {
	if ($(window).scrollTop() >= $(window).height() * 0.95) {
		console.log("recognizes scrolling");
		$("#main-navbar").addClass("transparent");
	} else {
		$("#main-navbar").removeClass("transparent");
	}
});
