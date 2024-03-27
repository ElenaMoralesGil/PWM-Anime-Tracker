import CharacterScheme from "../schemes/character.js";
import JikanService from "../services/jikanservice.js";

export default class CharacterModel {
    constructor() {
        this.api = new JikanService();
    }

    characterInfo = (characterid) => this.api.characterInfo(characterid).then(character => CharacterScheme.parse(character));
}