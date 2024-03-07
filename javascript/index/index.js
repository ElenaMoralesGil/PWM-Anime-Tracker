function loadHeroImage(){
    document.querySelector("#index-main-content-hero-image img").src="../../resources/images/frieren.jpg";
    document.querySelector("#index-main-content-hero-image p").innerHTML="Text";
    document.querySelector("#hero-anime-description").innerHTML=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
        "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
        "Duis aute irure dolor in reprehenderit";
}

document.addEventListener("DOMContentLoaded", function () {
    // No need to do anything in header element... Either on footer
    loadById('../templates/top-header.html', 'header').then(/*doNothing*/)
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/)
    loadById('../templates/name-image.html', 'index-main-content-hero-image').then(loadHeroImage);
    initSearchBar();
    loadingRows();
})