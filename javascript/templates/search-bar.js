function loadSearchBar() {
    return new Promise((resolve) => {
        loadById('../templates/search-bar.html', 'search-bar').
        then(()=>{
            let comboBoxes = document.querySelectorAll(".search-select");
            let documentFragment = new DocumentFragment();
            comboBoxes.forEach((elem)=>{
                for (let i = 0; i < 5; i++){
                    let option = document.createElement("option");
                    option.value=String(i);
                    option.className="select-search-option";
                    option.innerHTML="Text";
                    documentFragment.appendChild(option);
                }
                elem.appendChild(documentFragment);
                resolve();
            })
        })
    })
}