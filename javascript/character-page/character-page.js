import ContentModel from "../../models/contentmodel.js";

function getContent() {
    const urlParams = new URLSearchParams(window.location.search);
    return new ContentModel().findById(urlParams.get('id'));
}

function loadMainImage(source) {
    let topImage = document.createElement("img");
    topImage.alt="A wide image based on the anime show that displays in the top part of the page.";
    topImage.title="A wide image based on the anime";
    topImage.src= source ? source : "../../resources/images/frieren.jpg";
    document.querySelector(".top-image").appendChild(topImage);
}

function loadAnimeCharacters() {
    const routeCharacter = "../../html/templates/anime-character.html";
    const imageRoute = "../../html/templates/name-image.html";
    let contentHTML = undefined;
    let imageHTML = undefined;

    let contentFetch = new Promise((resolve) => {
        fetch(routeCharacter)
            .then(response => response.text())
            .then(html => {
                contentHTML = html;
                resolve();
            });
    });

    let imageFetch = new Promise((resolve) => {
        fetch(imageRoute)
            .then(response => response.text())
            .then(html => {
                imageHTML = html;
                resolve();
            });
    });

    Promise.all([
        contentFetch,
        imageFetch,

    ]).then(()=>{
        let documentFragment = new DocumentFragment();
        for (let i = 0; i < 10; i++){
            let animeCharacter = document.createElement("article");
            animeCharacter.innerHTML = contentHTML;
            animeCharacter.className = "anime-character";
            animeCharacter.querySelector(".anime-character-name-image").innerHTML = imageHTML;
            loadAnimeCharacter(animeCharacter);
            documentFragment.appendChild(animeCharacter);
        }
        document.querySelector(".characters").appendChild(documentFragment);
    })
}

document.addEventListener("DOMContentLoaded", function() {
    loadTopHeaderUser().then(loadMobileMenu);
    loadFooter();
    getContent().then(content => {
        loadMainImage(content ? content.images[1] : null);
        loadAnimeTopDescription(content ? {
            title:content.title,
            synopsis:content.synopsis,
            cover:content.images[0],
            score:content.score}
            : null);
        loadInfoAside(content ? {
            Type:content.type,
            Source:content.source, 
            Episodes:content.episodes, 
            Duration:content.duration,
            Status:content.status, 
            Season:content.season, 
            Year:content.year, 
            Studios:content.studios, 
            Genres:content.genres, 
            Rating:content.rating} 
            : null);
    });
    loadAnimeCharacters();
    addNavbarEvents();
});