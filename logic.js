const homeBtn = document.getElementById("home");
const title = document.getElementById("title");
const menuBtn = document.getElementById("menu-toggle");
const menuComponents = document.querySelectorAll(".nav-menu-items");
const mobileSubMenu = document.querySelector(".sub-menu");
const linksMenuBtnMob = document.querySelector(".link-btn-mob");
const linksMenuBtnDesk = document.querySelector(".link-btn-desk");
const linksMenuMob = document.querySelectorAll(".subMob")
const linksMenuDesk = document.querySelectorAll(".subDesk")
const subDrop = document.querySelector(".sub-drop")
// open and close the two sub menu variations based on screen size
function togSubMenus() {
    let wid = window.innerWidth;
        linkMenuOff();
    if ( wid <= 991) {
     mobileSubMenu.classList.toggle("hidden");
     title.classList.remove("hidden");
     menuComponents.forEach((component) => {
        component.classList.add("hidden");
     });
    }else{
     mobileSubMenu.classList.add("hidden");
     title.classList.toggle("hidden");
     menuComponents.forEach((component) => {
        component.classList.toggle("hidden");
     });
    }
}
// close link sub menus
function linkMenuOff() {
    subDrop.classList.add("hidden");
    linksMenuMob.forEach((component) => {
        component.classList.add("hidden")
    });
    linksMenuDesk.forEach((component) => {
        component.classList.add("hidden")
    });
}
// toggles mobile submenu links
function togLinksMenuMob() {
    subDrop.classList.toggle("hidden");
    linksMenuMob.forEach((component) => {
        component.classList.toggle("hidden")
    });
}
// toggles desktop submenu
function togLinksMenuDesk() {
    subDrop.classList.toggle("hidden");
    linksMenuDesk.forEach((component) => {
        component.classList.toggle("hidden")
    });
}
// listner to close sub menus if the browser resizes
addEventListener("resize", (e) => {
    title.classList.remove("hidden");
    mobileSubMenu.classList.add("hidden");
    menuComponents.forEach((component) => {
        component.classList.add("hidden");
    });
});
menuBtn.addEventListener("click", togSubMenus);
linksMenuBtnMob.addEventListener("click", togLinksMenuMob);
linksMenuBtnDesk.addEventListener("click", togLinksMenuDesk);