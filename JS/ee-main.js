
let body = document.querySelector("body");
let menu = document.querySelector(".mobile-menu-background");

function openMenu() {
    menu.style.display = "flex";
    body.style.overflowY = "hidden";
}

function closeMenu() {
    menu.style.display = "none";
    body.style.overflow = "scroll";
}

