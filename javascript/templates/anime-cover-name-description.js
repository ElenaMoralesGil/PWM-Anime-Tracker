function loadAnimeName(name) {
    document.querySelector(".cover-name p").innerHTML = name;
}

function loadAnimeCover(cover) {
    document.querySelector(".cover-name img").src = cover;
}

function loadAnimeDescription(description) {
    document.querySelector(".anime-description").innerHTML=
        description;
}

function loadAnimeRate(rate) {
    document.querySelector(".anime-score-container p").innerHTML=rate;
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

function loadAnimeTopDescription(contentData) {
    loadByClass('../templates/anime-cover-name-description.html', 'top-cover-image-and-description').
    then(()=> loadByClass('../templates/name-image.html', 'cover-name')).
    then(()=>{
        loadAnimeName(contentData ? contentData.title : "Text");
        loadAnimeCover(contentData ? contentData.cover : "../../../resources/images/frieren.jpg");
        loadAnimeDescription(contentData ? contentData.synopsis : "Lorem ipsum dolor sit amet,\
        consectetur adipiscing elit. Donec et lorem et erat suscipit sodales tempor eu eros. Morbi\
        ullamcorper justo ac dolor tristique rutrum. Vestibulum gravida a nisl ac accumsan. Praesent\
        sagittis nulla eget quam volutpat venenatis. Cras gravida sem nisl, vel sollicitudin diam\
        molestie in. Fusce imperdiet eros nibh, vitae hendrerit dolor ultrices eu. Integer imperdiet\
        vehicula purus quis aliquet.");
        loadAnimeRate(contentData ? contentData.score : 5);
        loadRateDropDown();
        loadListDropDown();
        loadDropDownButtonsEvent();
    })
}