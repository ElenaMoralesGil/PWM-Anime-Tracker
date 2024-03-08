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
    loadTopHeader();
    loadById('../templates/bottom-footer.html', 'footer');
    loadAnimeTopDescription();
    loadInfoAside();
    loadAnimeCharacters();
});