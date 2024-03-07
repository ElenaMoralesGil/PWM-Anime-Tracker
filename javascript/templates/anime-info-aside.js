function getDataKey(){
    let animeDataKey = document.createElement("p");
    animeDataKey.innerHTML="Text";
    return animeDataKey;
}

function getDataValue() {
    let animeDataValue = document.createElement("p");
    animeDataValue.innerHTML="Text";
    return animeDataValue;
}

function loadInfoAside() {
    loadByClass('../templates/anime-info-aside.html', 'aside-anime-information').
    then(()=>{
        let documentFragment = new DocumentFragment();
        let asideContainer = document.querySelector(".anime-info-container");
        for (let i = 0; i < 10; i++){
            let animeData = document.createElement("article");
            animeData.className="anime-data";
            animeData.appendChild(getDataKey());
            animeData.appendChild(getDataValue());
            documentFragment.appendChild(animeData);
        }
        asideContainer.appendChild(documentFragment);
    })
}