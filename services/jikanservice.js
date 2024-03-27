export default class JikanService {
    constructor() {
        this.contentpath = 'https://api.jikan.moe/v4/anime';
        this.characterspath = 'https://api.jikan.moe/v4/characters';
    }
    
    // Queries Jikan API for an anime data by id.
    findById = (animeId) => fetch(`${this.contentpath}/${animeId}`).then(res => res.json()).then(res => res.data);

    // Queries Jikan API for an anime set of characters by id.
    animeCharacters = (animeid) => fetch(`${this.contentpath}/${animeid}/characters`).then(res => res.json()).then(res => res.data);

    // Queries Jikan API for the information of a anime character.
    characterInfo = (characterid) => fetch(`${this.characterspath}/${characterid}`).then(res => res.json()).then(res => res.data);
}