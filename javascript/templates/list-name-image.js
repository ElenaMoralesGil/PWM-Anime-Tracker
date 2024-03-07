function loadingRows () {
    const source = "../../resources/images/frieren.jpg";
    const alt = "An anime cover image";
    const title = "Anime cover image";
    Promise.all([
        loadById('../templates/list-name-image.html', 'newly-added-row'),
        loadById('../templates/list-name-image.html', 'our-recommendations-row'),
        loadById('../templates/list-name-image.html', 'most-liked-row')
    ]).then(() => {
        loadByClass('../templates/name-image.html', 'row-name-image')
            .then(()=> {
                let rowNames = document.querySelectorAll(".row-name-image p");
                rowNames.forEach(elem=>{
                    elem.innerHTML = "Text";
                })
                let rowImages = document.querySelectorAll(".row-name-image img");
                rowImages.forEach(elem => {
                    elem.setAttribute("src", source);
                    elem.setAttribute("alt", alt);
                    elem.setAttribute("title", title);
                    console.log(elem);
                });
            })
    })
}