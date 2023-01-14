var navbar = document.getElementById("navbar")
var main = document.getElementById("main")
this.print("hello")
this.window.addEventListener("scroll", function() {
    this.print("hello")
    if(this.scrollY > this.window.innerHeight) {
        navbar.className = "navbar-fixed";
    } else {
        navbar.className = "navbar-scroll";
    }
})