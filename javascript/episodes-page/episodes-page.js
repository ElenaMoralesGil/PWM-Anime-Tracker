function loadMainImage() {
    let topImage = document.createElement("img");
    topImage.alt="A wide image based on the anime show that displays in the top part of the page.";
    topImage.title="A wide image based on the anime";
    topImage.src="../../resources/images/frieren.jpg";
    document.querySelector(".top-image").appendChild(topImage);
}

function loadAnimeEpisodes() {
    const episodeRoute = "../../html/templates/anime-episode.html";
    let episodeHTML = undefined;

    let episodeFetch = new Promise((resolve)=>{
        fetch(episodeRoute).
        then(response => response.text()).
        then(html => {
            episodeHTML = html;
            resolve();
        })
    });

    episodeFetch.then(()=>{
        let documentFragment = new DocumentFragment();
        for (let i = 0; i < 20; i++){
            let episode = document.createElement("article");
            episode.className="episode";
            episode.innerHTML = episodeHTML;
            loadAnimeEpisode(episode);
            documentFragment.appendChild(episode);
        }
        document.querySelector(".episodes").appendChild(documentFragment);
    })
}

document.addEventListener("DOMContentLoaded", function() {
    loadTopHeader().then(addHeaderEvent);
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/);
    loadMainImage();
    loadAnimeEpisodes();
    loadAnimeTopDescription();
    loadInfoAside();
    addNavbarEvents();
});