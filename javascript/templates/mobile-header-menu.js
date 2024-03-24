function loadMobileMenu() {
    loadById('../../html/templates/mobile-header-menu.html', 'mobile-menu').
    then(loadMenuRedirections).
    then(addMobileMenuEvent);
}

function loadMenuRedirections() {
    document.querySelector("#home").addEventListener("click", () => {
        if(document.querySelector("body").id !== "index-body"){
            location.assign("../../html/index-page/index.html");
        }
    });

    document.querySelector("#search").addEventListener("click", () => {
        if(document.querySelector("body").id !== "search-body"){
            location.assign("../../html/search-page/search-page.html");
        }
    });

    document.querySelector("#ranking").addEventListener("click", () => {
        if(document.querySelector("body").id !== "ranking-body"){
            location.assign("../../html/ranking-page/ranking-page.html");
        }
    });

    document.querySelector("#profile").addEventListener("click", () => {
        if(document.querySelector("body").id !== "ranking-body"){
            location.assign("/html/profile-pages/profileCompleted.html");
        }
    });

    // Add events to the sign in and sign up anchors
}

function addMobileMenuEvent(){
    document.querySelector("#header-mobile-menu-button").addEventListener("click", () => {
        let wrapper_display = document.querySelector("#mobile-menu");
        wrapper_display.classList[0] === "hidden" ? wrapper_display.classList.remove("hidden") :
         wrapper_display.classList.add("hidden");
    })
}