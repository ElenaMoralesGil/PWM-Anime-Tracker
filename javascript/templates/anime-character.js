function loadCharacterName(element) {
    element.querySelector(".anime-character-name-image p").innerHTML="Text";
}

function loadCharacterImage(element) {
    element.querySelector(".anime-character-name-image img").src="../../resources/images/shoujo-shuumatsu.jpeg";
}

function loadCharacterDescription(element) {
    element.querySelector(".character-description").innerHTML=
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit,\n" +
        "sed do eiusmod tempor incididunt ut labore et dolore magna\n" +
        "aliqua. Ut enim ad minim veniam, quis nostrud exercitation\n" +
        "ullamco laboris nisi ut aliquip ex ea commodo consequat\n" +
        "Duis aute irure dolor in reprehenderit.";
}

function loadAnimeCharacter(element) {
    loadCharacterName(element);
    loadCharacterImage(element);
    loadCharacterDescription(element);
}