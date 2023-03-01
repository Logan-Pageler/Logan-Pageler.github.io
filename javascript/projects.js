var projects = document.getElementById("projects");
var header = document.getElementById("project-header");
var about = document.getElementById("about");

this.window.addEventListener("scroll", function () {
	var rect = about.getBoundingClientRect();

	if (rect.bottom < this.window.innerHeight / 2 && rect.bottom > 0) {
		projects.style.backgroundColor =
			"rgba(33,33,33," +
			((1.2 * rect.bottom) / this.window.innerHeight + 0.4) +
			")";
	} else if (rect.bottom > this.window.innerHeight / 2) {
		projects.style.backgroundColor = "rgba(33,33,33,1)";
	} else if (rect.bottom < 0) {
		projects.style.backgroundColor = "rgba(33,33,33,0.4)";
	}

	if (rect.bottom < 0 && rect.bottom > this.window.innerHeight / -2) {
		header.style.visibility = "visible";
		//1.3*2 = 2.6
		header.style.marginLeft =
			(1 + (2.6 * rect.bottom) / this.window.innerHeight) *
			this.window.innerWidth;
	} else if (rect.bottom > 0) {
		header.style.visibility = "hidden";
	} else if (rect.bottom < this.window.innerHeight / -3) {
		header.style.marginLeft = -0.3 * this.window.innerWidth;
	}
});
