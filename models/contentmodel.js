import JikanService from "../services/jikanservice.js";
import ContentScheme from "../schemes/content.js";


export default class ContentModel {
    constructor() {
        this.api = new JikanService();
    }
    findById = (id) => this.api.findById(id).then(content => content ? ContentScheme.parse(content) : null);
}