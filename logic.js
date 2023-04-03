const homeBtn = document.getElementById("home");
const title = document.getElementById("title");
const menuBtn = document.getElementById("menu-toggle");
const menuComponents = document.querySelectorAll(".nav-menu-items")
const mobileSubMenu = document.querySelector(".sub-menu")

// open and close menus
function togSubMenus() {
    let wid = window.innerWidth;
    
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

menuBtn.addEventListener("click", togSubMenus);

