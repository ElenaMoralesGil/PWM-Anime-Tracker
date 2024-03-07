function loadAnimeName() {
    document.querySelector(".cover-name p").innerHTML = "Text";
}

function loadAnimeCover() {
    document.querySelector(".cover-name img").src = "../../resources/images/frieren.jpg";
}

function loadAnimeDescription() {
    document.querySelector(".anime-description").innerHTML=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
        "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat\n" +
        "Duis aute irure dolor in reprehenderit.";
}

function loadListCombobox() {
    let listCombobox = document.querySelector(".add-list-combobox");
    let documentFragment = new DocumentFragment();
    for (let i = 0; i < 5; i++){
        let option = document.createElement("option");
        option.innerHTML="Text";
        documentFragment.appendChild(option);
    }
    listCombobox.appendChild(documentFragment);
}

function loadAnimeTopDescription() {
    loadByClass('../templates/anime-cover-name-description.html', 'top-cover-image-and-description').
    then(()=> loadByClass('../templates/name-image.html', 'cover-name')).
    then(()=>{
        loadAnimeName();
        loadAnimeCover();
        loadAnimeDescription();
        loadListCombobox();
    })
}