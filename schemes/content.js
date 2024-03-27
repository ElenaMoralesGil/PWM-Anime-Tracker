export default class Content {
    constructor({mal_id, title, synopsis, images, score,
         type, source, episodes, duration, status,
          season, year, studios, genres, rating}) {
        this.mal_id = mal_id;
        this.title = title;
        this.synopsis = synopsis;
        this.images = images;
        this.score = score;
        this.type = type;
        this.source = source;
        this.episodes = episodes;
        this.duration = duration;
        this.status = status;
        this.season = season;
        this.year = year;
        this.studios = studios;
        this.genres = genres;
        this.rating = rating;
    }
    static parse = content => new Content(content)
    stringify = () => JSON.stringify(this)
    get = () => JSON.parse(JSON.stringify(this))
}