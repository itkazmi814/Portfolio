console.log("main.js linked");

$(window).scroll(() => {
	if ($(window).scrollTop() >= $(window).height() * 0.95) {
		// console.log("recognizes scrolling");
		$("#main-navbar").addClass("transparent");
	} else {
		$("#main-navbar").removeClass("transparent");
	}
});

// $(document).ready(function() {
// 	$(".parallax-jumbotron").each(function() {
// 		console.log("hello");
// 		var $bgobj = $(this); // assigning the object
// 		$(window).scroll(function() {
// 			console.log("world");
// 			var yPos = -$(window).scrollTop() / $bgobj.data("speed");
// 			// Put together our final background position
// 			var coords = "30% " + yPos + "px";
// 			// Move the background
// 			$bgobj.css({ backgroundPosition: coords });
// 		});
// 	});
// });
