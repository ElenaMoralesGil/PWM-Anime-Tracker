function loadEpisodeData(episode) {
    let episodeData = episode.querySelectorAll(".anime-episode-container p");
    for (let data of episodeData){
        data.innerHTML = "Text";
    }
}

function loadAnimeEpisode(episode) {
    loadEpisodeData(episode);
}