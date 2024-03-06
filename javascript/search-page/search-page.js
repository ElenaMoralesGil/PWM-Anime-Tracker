let selectedOptions = [];

function addSelectorListeners() {
    let options = document.querySelectorAll(".search-select .select-search-option");
    for (options of options){
        options.onclick = function (){
            updateSearchTags();
        }
    }
}

function updateSearchTags() {
    console.log("Hi");
    /*
    let selectedOption = selector.options[selector.selectedIndex].text;
    if (!selectedOptions.includes(selectedOption)){
        selectedOptions.push(selectedOption);
        let tagBox = document.createElement("article");
        let tagText = document.createElement("p");
        tagBox.className="tag";
        tagBox.id=`tag + ${selectedOption}`
        tagText.textContent=selectedOption;
        tagBox.appendChild(tagText);
        document.querySelector(".search-tags").appendChild(tagBox);
    } else {
        selectedOptions = selectedOptions.filter(elem => elem !== selectedOption);
        let childToRemove = document.getElementById(`tag + ${selectedOption}`)
        document.querySelector(".search-tags").removeChild(childToRemove);
    }
    */
}

document.addEventListener("DOMContentLoaded", function() {
    loadById('../templates/top-header.html', 'header').then(/*doNothing*/);
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/);
    loadSearchBar().then(addSelectorListeners);
    loadByClass('../templates/name-image.html', 'result-anime');
});