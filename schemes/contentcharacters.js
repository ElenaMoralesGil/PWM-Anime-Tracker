export default class ContentCharactersScheme {
    constructor(data) {
        this.characters = data;
    }
    static parse = data => new ContentCharactersScheme(data);
    stringify = () => JSON.stringify(this);
    get = () => JSON.parse(JSON.stringify(this));
}