function createTag(checkBox) {
    let tagContainer = document.createElement("article");
    let tagText = document.createElement("p");
    tagContainer.className="tag";
    tagText.innerHTML=checkBox.id;
    tagContainer.id=`tag-${checkBox.id}`;
    tagContainer.appendChild(tagText);
    document.querySelector(".search-tags").appendChild(tagContainer);
}

function removeTag(checkBox){
    let tagToRemove = document.querySelector(`#tag-${checkBox.id}`);
    let tagParent = tagToRemove.parentNode;
    tagParent.removeChild(tagToRemove);
}

document.addEventListener("DOMContentLoaded", function() {
    loadById('../templates/top-header.html', 'header').then(/*doNothing*/);
    loadById('../templates/bottom-footer.html', 'footer').then(/*doNothing*/);
    initSearchBar();
    // loadByClass('../templates/name-image.html', 'result-anime');
});