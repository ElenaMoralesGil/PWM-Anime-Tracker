function loadCharacterName(element, characterData) {
    console.log(characterData)
    element.querySelector(".anime-character-name-image p").innerHTML=characterData.character.name;
}

function loadCharacterImage(element, characterData) {
    element.querySelector(".anime-character-name-image img").src=characterData.character.images.jpg.image_url;
}

function loadCharacterDescription(element) {
    element.querySelector(".character-description").innerHTML=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
        "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat\n" +
        "Duis aute irure dolor in reprehenderit.";
}

function loadAnimeCharacter(element, characterData) {
    loadCharacterName(element, characterData);
    loadCharacterImage(element, characterData);
    loadCharacterDescription(element);
}