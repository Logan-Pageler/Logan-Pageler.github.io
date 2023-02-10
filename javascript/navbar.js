var navbar = document.getElementById("navbar");

this.window.addEventListener("scroll", function () {
	if (this.scrollY > this.window.innerHeight - 80) {
		navbar.className = "navbar-fixed";
	} else {
		navbar.className = "navbar-scroll";
	}
});
