import JikanService from "../services/jikanservice";
import Content from "../schemes/content";

export default class ContentModel {
    constructor() {
        this.api = new JikanService();
    }
    findById = (id) => this.api.findById(id).then(content => content ? Content.parse(content) : null);
}