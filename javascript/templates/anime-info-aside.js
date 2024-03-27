function getDataKey(key){
    let animeDataKey = document.createElement("p");
    animeDataKey.innerHTML=key ? key : "Text";
    return animeDataKey;
}

function getDataValue(value) {
    let animeDataValue = document.createElement("p");
    animeDataValue.innerHTML=value ? value : "Text";
    return animeDataValue;
}

function mockasideload(documentFragment) {
    for (let i = 0; i < 10; i++){
        let animeData = document.createElement("article");
        animeData.className="anime-data";
        animeData.appendChild(getDataKey(null));
        animeData.appendChild(getDataValue(null));
        documentFragment.appendChild(animeData);
    }
}

function loadInfoAside(asideInformation) {
    loadByClass('../templates/anime-info-aside.html', 'aside-anime-information').
    then(()=>{
        let documentFragment = new DocumentFragment();
        let asideContainer = document.querySelector(".anime-info-container");
        if (asideInformation){
            for (let key in asideInformation){
                let animeData = document.createElement("article");
                animeData.className="anime-data";
                animeData.appendChild(getDataKey(key));
                Array.isArray(asideInformation[key]) ?  asideInformation[key].forEach(elem => animeData.appendChild(getDataValue(elem.name))) : animeData.appendChild(getDataValue(asideInformation[key]));
                documentFragment.appendChild(animeData);
            }
        } else {
            mockasideload(documentFragment, asideContainer);
        }
        asideContainer.appendChild(documentFragment);
    })
}