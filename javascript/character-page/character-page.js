function loadAnimeCharacters() {
    const routeCharacter = "../../html/templates/anime-character.html";
    const routeImage = "../../html/templates/name-image.html";
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
        fetch(routeImage)
        .then(response => response.text())
        .then(html => {
            imageHTML = html;
            resolve();
        });
    });

    /*
    let contentPromise = fetch(routeCharacter).
    then(response => response.text()).
    then(html => {
        contentHTML = html;
    });

    let imagePromise = fetch(routeImage).
    then(response => response.text()).
    then(html => {
        imageHTML = html;
    });
    */


    Promise.all([
        contentFetch,
        imageFetch,

    ]).then(()=>{
        let documentFragment = new DocumentFragment();
        for (let i = 0; i < 50; i++){
            let animeCharacter = document.createElement("article");
            animeCharacter.innerHTML = contentHTML;
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