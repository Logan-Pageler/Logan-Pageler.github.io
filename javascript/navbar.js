var navbar = document.getElementById("navbar");

console.log("hello");
this.window.addEventListener("scroll", function() {
    console.log("hello");
    if(this.scrollY > this.window.innerHeight * 0.82) {
        navbar.className = "navbar-fixed";
    } else {
        navbar.className = "navbar-scroll";
    }
})