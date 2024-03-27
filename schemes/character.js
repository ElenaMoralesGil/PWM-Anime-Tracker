export default class Character {
    constructor({mal_id, name, images, about}) {
        this.mal_id = mal_id;
        this.name = name;
        this.images = images;
        this.description = about;
    }
    static parse = data => new Character(data)
    stringify = () => JSON.stringify(this)
    get = () => JSON.parse(JSON.stringify(this))
}