import CharacterModel from "../../models/charactermodel.js";
const model = new CharacterModel();

function loadCharacterName(element, characterData) {
    element.querySelector(".anime-character-name-image p").innerHTML= characterData ? characterData.character.name : "Text";
}

function loadCharacterImage(element, characterData) {
    element.querySelector(".anime-character-name-image img").src= characterData ? characterData.character.images.jpg.image_url : "../../../resources/images/frieren.jpg";
}

function loadCharacterDescription(element, characterData) {
    element.addEventListener("click", () => {
        let description = element.querySelector(".character-description");
        let name = element.querySelector(".anime-character-name-image p");
        if(description.classList.contains("hidden")){
            name.classList.add("hidden");
            model.characterInfo(characterData.character.mal_id).then(character => {
                description.innerHTML = character.description;
                description.classList.remove("hidden");
            })
        } else {
            name.classList.remove("hidden");
            description.classList.add("hidden");
        }
    })
}

export default function loadAnimeCharacter(element, characterData) {
    loadCharacterName(element, characterData);
    loadCharacterImage(element, characterData);
    loadCharacterDescription(element, characterData);
}