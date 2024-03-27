function loadRankingPositions() {
    return new Promise((resolve) => {
        const positionRoute = "../../html/templates/ranking-position.html";
        let positionHTML = undefined;

        let positionFetch = new Promise((resolve) => {
            fetch(positionRoute).
            then(response => response.text()).
            then(html => {
                positionHTML = html;
                resolve();
            })
        })

        positionFetch.then(()=>{
            let documentFragment = new DocumentFragment();
            for (let i = 0; i < 20; i++){
                let positionContainer = document.createElement("article");
                positionContainer.className="anime-position";
                positionContainer.innerHTML=positionHTML;
                loadRankingPosition(positionContainer);
                documentFragment.appendChild(positionContainer);
            }
            document.querySelector(".positions").appendChild(documentFragment);
            resolve();
        })
    })
}

function addPositionsEvent() {
    document.querySelectorAll(".anime-position img").forEach(elem => {
        elem.addEventListener("click", () => {
            location.assign("../../html/character-page/characters-anime.html");
        })
    })
}

document.addEventListener("DOMContentLoaded", function() {
    loadTopHeaderUser();
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/);
    loadRankingPositions().
    then(addPositionsEvent);
});