function loadSearchBar() {
    loadById('../templates/search-bar.html', 'index-search-bar').
    then(()=>{
        let comboBoxes = document.querySelectorAll(".combo-box-select");
        let documentFragment = new DocumentFragment();
        comboBoxes.forEach((elem)=>{
            for (let i = 0; i < 5; i++){
                let option = document.createElement("option");
                option.innerHTML="Text"
                documentFragment.appendChild(option);
            }
            elem.appendChild(documentFragment);
        })
    })
}