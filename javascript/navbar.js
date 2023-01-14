var navbar = document.getElementById("navbar")
var main = document.getElementById("main")

window.addEventListener("scroll", function() {
  if(this.scrollY > main.clientHeight) {
    navbar.className = "navbar-fixed";
  } else {
    navbar.className = "navbar-scroll";
  }
})