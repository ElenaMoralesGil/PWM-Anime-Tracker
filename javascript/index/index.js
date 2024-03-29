function loadHeroImage(){
    return new Promise((resolve) => {
        let heroImage = document.querySelector("#index-main-content-hero-image img");
        heroImage.id="index-hero-image";
        heroImage.alt="a fullscreen picture of a popular well know anime";
        heroImage.title="hero image";
        heroImage.src="../../resources/images/image.png";
        document.querySelector("#index-main-content-hero-image p").innerHTML="Text";
        document.querySelector("#hero-anime-description").innerHTML=
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
            "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
            "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
            "ullamco laboris nisi ut aliquip ex ea commodo consequat.\n" +
            "Duis aute irure dolor in reprehenderit";
        resolve();
    });
}

function addHeroImageEvent() {
    document.querySelector("#index-hero-image").addEventListener("click", ()=>{
        location.assign("../../html/character-page/characters-anime.html");
    })
}

document.addEventListener("DOMContentLoaded", function () {
    loadTopHeader().then(addHeaderEvent);
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/)
    loadById('../templates/name-image.html', 'index-main-content-hero-image').
    then(loadHeroImage).
    then(addHeroImageEvent);
    initSearchBar();
    loadingRows();
})