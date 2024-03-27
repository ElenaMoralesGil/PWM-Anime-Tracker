import JikanService from "../services/jikanservice.js";
import ContentScheme from "../schemes/content.js";
import ContentCharactersScheme from "../schemes/contentcharacters.js";


export default class ContentModel {
    constructor() {
        this.api = new JikanService();
    }

    findById = (id) => this.api.findById(id).then(content => content ? ContentScheme.parse(content) : null);

    animeCharacters = (id) => this.api.animeCharacters(id).then(characters => characters ? ContentCharactersScheme.parse(characters) : null);
}