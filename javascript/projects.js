var projects = document.getElementById("projects");
var header = document.getElementById("project-header");
var about = document.getElementById("about");

this.window.addEventListener("scroll", function () {
	var aboutRect = about.getBoundingClientRect();
	var projectRect = projects.getBoundingClientRect();

	// fade in/out effect
	if (
		aboutRect.bottom < this.window.innerHeight / 2 &&
		aboutRect.bottom > 0
	) {
		// fade in
		projects.style.backgroundColor =
			"rgba(33,33,33," +
			((1.2 * aboutRect.bottom) / this.window.innerHeight + 0.4) +
			")";
	} else if (
		projectRect.bottom < this.window.innerHeight &&
		projectRect.bottom > this.window.innerHeight / 2
	) {
		// fade out
		projects.style.backgroundColor =
			"rgba(33,33,33," +
			((-1.2 * projectRect.bottom) / this.window.innerHeight + 1.6) +
			")";
	} else if (
		aboutRect.bottom >= this.window.innerHeight / 2 ||
		projectRect.bottom <= this.window.innerHeight / 2
	) {
		// no sky
		projects.style.backgroundColor = "rgba(33,33,33,1)";
	} else if (
		aboutRect.bottom <= 0 &&
		projectRect.bottom >= this.window.innerHeight
	) {
		// sky
		projects.style.backgroundColor = "rgba(33,33,33,0.4)";
	}

	// airplane
	if (
		aboutRect.bottom < 0 &&
		aboutRect.bottom > this.window.innerHeight / -2
	) {
		header.style.visibility = "visible";
		//1.3*2 = 2.6
		header.style.marginLeft =
			(1 + (2.6 * aboutRect.bottom) / this.window.innerHeight) *
			this.window.innerWidth;
	} else if (aboutRect.bottom > 0) {
		header.style.visibility = "hidden";
	} else if (aboutRect.bottom < this.window.innerHeight / -3) {
		header.style.marginLeft = -0.3 * this.window.innerWidth;
	}
});
