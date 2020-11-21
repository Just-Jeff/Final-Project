function toggleMenu() {
    var menu = document.querySelector("#menu");
    var hamburger = document.querySelector("#hamburger");
    var overlay = document.querySelector("#overlay");

    menu.classList.toggle("active");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("active");
}