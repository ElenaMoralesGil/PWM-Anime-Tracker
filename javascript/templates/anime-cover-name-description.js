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

function loadAnimeRate() {
    document.querySelector(".anime-score-container p").innerHTML="5";
}

function getContainer(dropDown){
    let optionContainer = document.createElement("article");
    optionContainer.className = `${dropDown}-option`;
    return optionContainer;
}

function getLabel(dropDown, number) {
    let optionLabel = document.createElement("label");
    optionLabel.className = `${dropDown}-label`;
    optionLabel.innerHTML = "Text";
    optionLabel.setAttribute("for", `${dropDown}-option${number}`);
    return optionLabel;
}

function getInput(dropDown, number) {
    let optionInput = document.createElement("input");
    optionInput.id=`${dropDown}-option${number}`;
    optionInput.type="radio";
    optionInput.name=`${dropDown}-radio`;
    optionInput.className=`${dropDown}-input`;
    return optionInput;
}

function loadRateDropDown() {
    let rateContainer = document.querySelector("#rate-dropdown-container");
    let documentFragment = new DocumentFragment();
    for (let i = 0; i < 5; i++){
        let dropDown = rateContainer.id.split("-")[0];
        let [container, ...components] =
            [getContainer(dropDown), getLabel(dropDown, i), getInput(dropDown, i)]
        components.forEach(elem => container.appendChild(elem));
        documentFragment.appendChild(container);
    }
    rateContainer.appendChild(documentFragment);
}

function loadListDropDown() {
    let listsContainer = document.querySelector("#addList-dropdown-container");
    let documentFragment = new DocumentFragment();
    for (let i = 0; i < 3; i++){
        let dropDown = listsContainer.id.split("-")[0];
        let [container, ...components] =
            [getContainer(dropDown), getLabel(dropDown, i), getInput(dropDown, i)]
        components.forEach(elem => container.appendChild(elem));
        documentFragment.appendChild(container);
    }
    listsContainer.appendChild(documentFragment);
}

function loadDropDownButtonsEvent() {
    let dropDownButtons = document.querySelectorAll(".anime-menu-button-container input");
    dropDownButtons.forEach(elem => {
        elem.addEventListener("click", () => {
            let identifier = elem.id.split("-")[0];
            let dropDown = document.querySelector(`#${identifier}-dropdown-container`);
            dropDown.style.display = dropDown.style.display === "none" ? "flex" : "none";
        })
    })
}

function loadAnimeTopDescription() {
    loadByClass('../templates/anime-cover-name-description.html', 'top-cover-image-and-description').
    then(()=> loadByClass('../templates/name-image.html', 'cover-name')).
    then(()=>{
        loadAnimeName();
        loadAnimeCover();
        loadAnimeDescription();
        loadRateDropDown();
        loadListDropDown();
        loadAnimeRate();
        loadDropDownButtonsEvent();
    })
}