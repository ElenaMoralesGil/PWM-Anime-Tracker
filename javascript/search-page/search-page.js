function createTag(checkBox) {
    let tagContainer = document.createElement("article");
    let tagText = document.createElement("p");
    tagContainer.className="tag";
    tagText.innerHTML=checkBox.id;
    tagContainer.id=`tag-${checkBox.id}`;
    tagContainer.appendChild(tagText);
    document.querySelector(".search-tags").appendChild(tagContainer);
}

function removeTag(checkBox){
    let tagToRemove = document.querySelector(`#tag-${checkBox.id}`);
    let tagParent = tagToRemove.parentNode;
    tagParent.removeChild(tagToRemove);
}

function loadResultName(resultContainer) {
    resultContainer.querySelector("p").innerHTML="Text";
}

function loadResultImage(resultContainer) {
    let image = resultContainer.querySelector("img");
    image.alt = "cover of anime result";
    image.title = "cover of anime result";
    image.src = "../../resources/images/frieren.jpg";
}

function loadResult(resultContainer) {
    loadResultName(resultContainer);
    loadResultImage(resultContainer);
}

function loadResults() {
    return new Promise((resolve) => {
        const resultRoute = "../../html/templates/name-image.html";
        let resultHTML = undefined;

        let resultFetch = new Promise((resolve) =>{
            fetch(resultRoute).
            then(response => response.text()).
            then(html => {
                resultHTML = html;
                resolve();
            })
        })

        resultFetch.then(() => {
            let documentFragment = new DocumentFragment();
            for (let i = 0; i < 10; i++){
                let resultContainer = document.createElement("article");
                resultContainer.className = "result-anime";
                resultContainer.innerHTML = resultHTML;
                loadResult(resultContainer);
                documentFragment.appendChild(resultContainer);
            }
            document.querySelector("#result-content").appendChild(documentFragment);
            resolve();
        })
    })
}

function addResultEvents(){
    document.querySelectorAll(".result-anime img").forEach(elem => {
        elem.addEventListener("click", () => {
            location.assign("../../html/character-page/characters-anime.html");
        })
    })
}

document.addEventListener("DOMContentLoaded", function() {
    loadTopHeader();
    loadFooter();
    initSearchBar();
    loadResults().then(addResultEvents);
});