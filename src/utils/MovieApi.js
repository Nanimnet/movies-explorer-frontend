import { MOVIES_URL } from './constants.js';

class MovieApi {
    constructor({baseUrl, headers}) {
        this._baseUrl = baseUrl;
        this._headers = headers;
    }

    getFoundMovies() {
        return fetch(`${this._baseUrl}`, {
            headers: this._headers,
        })
        .then(this._checkResponseStatus)
    }

    _checkResponseStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }
}

const apiMovies = new MovieApi({
    baseUrl: MOVIES_URL,
    headers: {
        'Content-Type': 'application/json',
    }
})

export default apiMovies;