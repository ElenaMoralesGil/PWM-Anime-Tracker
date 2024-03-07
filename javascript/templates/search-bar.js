let counter = 0;
function setupContainer(searchItem, number) {
    let dropDownOption = document.createElement("article");
    dropDownOption.className="dropdown-option";
    dropDownOption.id=`${searchItem.id}:${number}`;
    return dropDownOption;
}

function setupLabel() {
    let optionLabel = document.createElement("label");
    optionLabel.innerHTML=`Text-${counter++}`;
    optionLabel.className="dropdown-label";
    optionLabel.setAttribute("for", optionLabel.innerHTML);
    return optionLabel;
}

function setupInput(searchItem, optionLabel) {
    let optionCheck = document.createElement("input");
    optionCheck.id=optionLabel.innerHTML;
    optionCheck.className="dropdown-checkbox";
    optionCheck.type="checkbox";
    return optionCheck;
}

function loadInputLists() {
    return new Promise((resolve) => {
        let documentFragment = new DocumentFragment();
        let searchBarInputs = document.querySelectorAll(".dropdown-list-container");
        for (let searchBarElem of searchBarInputs){
            for (let i = 0; i < 5; i++){
                let optionContainer = setupContainer(searchBarElem, i);
                let optionLabel = setupLabel(searchBarElem, i);
                optionContainer.appendChild(optionLabel);
                optionContainer.appendChild(setupInput(searchBarElem, optionLabel, i));
                documentFragment.appendChild(optionContainer);
            }
            searchBarElem.appendChild(documentFragment);
            resolve();
        }
    })
}

function addButtonListeners(){
    let buttons = document.querySelectorAll(".dropdown-button");
    for (let button of buttons){
        button.addEventListener("click", ()=>{
            let listId = button.id.split("-").filter(elem => elem !== "button");
            let displayList = document.querySelector("#" + listId.concat("list").join("-"));
            displayList.style.display = displayList.style.display === "none" ? "flex" : "none";
        });
    }
}

function addInputListeners(){
    let optionChecks = document.querySelectorAll(".dropdown-checkbox");
    optionChecks.forEach(elem => {
        elem.addEventListener("click", ()=>{
            if (elem.checked){
                // Here we have a tech debt for the next sprint. On page redirection we should track status.
                if (document.querySelector("body").id === "index-body"){
                    location.assign('http://localhost:63342/Templates/html/search-page/search-page.html');
                    // No more code is executed below due to page redirect applied.
                }
                createTag(elem);
            } else {
                removeTag(elem);
            }
        })
    })
}

function initSearchBar() {
    loadById('../templates/search-bar.html', 'search-bar').
    then(()=> {
        addButtonListeners();
        loadInputLists().
        then(addInputListeners);
    });
}