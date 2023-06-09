//Cached variables
const homeBtn = document.getElementById("home");
const title = document.getElementById("title");
const menuBtn = document.getElementById("menu-toggle");
const menuComponents = document.querySelectorAll(".nav-menu-items");
const mobileSubMenu = document.querySelector(".sub-menu");
const linksMenuBtnMob = document.querySelector(".link-btn-mob");
const linksMenuBtnDesk = document.querySelector(".link-btn-desk");
const linksMenuMob = document.querySelectorAll(".subMob");
const linksMenuDesk = document.querySelectorAll(".subDesk");
const subDrop = document.querySelector(".sub-drop");
const breaksInProjectMenu = document.querySelectorAll(".breaks");
const returnProjBtn = document.querySelector(".foot");
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
// closes link sub menu
function linkMenuOff() {
    subDrop.classList.add("hidden");
    linksMenuMob.forEach((component) => {
        component.classList.add("hidden")
    });
    linksMenuDesk.forEach((component) => {
        component.classList.add("hidden")
    });
}
// toggles mobile links submenu
function togLinksMenuMob() {
    subDrop.classList.toggle("hidden");
    linksMenuMob.forEach((component) => {
        component.classList.toggle("hidden")
    });
}
// toggles desktop links submenu
function togLinksMenuDesk() {
    subDrop.classList.toggle("hidden");
    linksMenuDesk.forEach((component) => {
        component.classList.toggle("hidden")
    });
}
// removes breaks inside of the project submenu for a cleaner interaction
function removeProjectMenuBreaks() {
    let wid = window.innerWidth
    if (wid > 991 || wid < 540) {
        breaksInProjectMenu.forEach((component) => {
            component.classList.remove("hidden");
        })
    }else{
        breaksInProjectMenu.forEach((component) => {
            component.classList.add("hidden");
        })
    }
}
removeProjectMenuBreaks();
// listens to user scrolling down the page
window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight + 50) {
        returnProjBtn.classList.remove("hidden");
    }else{
        returnProjBtn.classList.add("hidden");
    }
  };
//function scrolls back to the top of the projects page
function topOfPage () {
    window.scrollTo({top: 0});
};
//event listeners
// browser size listner to close sub menus if the browser resizes
addEventListener("resize", (e) => {
    title.classList.remove("hidden");
    mobileSubMenu.classList.add("hidden");
    menuComponents.forEach((component) => {
        component.classList.add("hidden");
    });
    removeProjectMenuBreaks();
});
menuBtn.addEventListener("click", togSubMenus);
linksMenuBtnMob.addEventListener("click", togLinksMenuMob);
linksMenuBtnDesk.addEventListener("click", togLinksMenuDesk);
returnProjBtn.addEventListener("click", topOfPage)