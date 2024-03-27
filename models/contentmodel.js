const JikanService = require("../services/jikanservice");
const contentscheme = require("../schemes/content");


module.exports = class ContentModel {
    constructor() {
        this.api = new JikanService();
    }
    findById = (id) => this.api.findById(id).then(content => content ? contentscheme.parse(content) : null);
}