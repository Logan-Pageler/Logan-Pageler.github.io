var navbar = document.getElementById("navbar");
var main = document.getElementById("main");
console.log("hello");
this.window.addEventListener("scroll", function() {
    console.log("hello");
    if(this.scrollY > this.window.innerHeight) {
        navbar.className = "navbar-fixed";
    } else {
        navbar.className = "navbar-scroll";
    }
})