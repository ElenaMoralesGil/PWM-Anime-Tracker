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
    loadById('../templates/top-header.html', 'header').then(/*doNothing*/);
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/);
    loadAnimeEpisodes();
    loadAnimeTopDescription();
    loadInfoAside();
});