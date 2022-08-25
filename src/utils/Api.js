class Api {
    constructor({baseUrl, headers}) {
        this._baseurl = baseUrl;
        this._headers = headers;
    }

    _getToken() {
        const jwt = localStorage.getItem('jwt');
        return `Bearer ${jwt}`;
    }

    _checkResponseStatus(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`)
    }

    getProfileInfo() {
        return fetch(`${this._baseurl}/users/me`, {
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json',
            }
        })
        .then(this._checkResponseStatus)
    }

    updateProfileInfo(name, email) {
        return fetch(`${this._baseurl}/users/me`, {
            method: 'PATCH',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
            })
        })
        .then(this._checkResponseStatus)
    }

    getSavedMovies() {
        return fetch(`${this._baseurl}/movies`, {
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json',
            }
        })
        .then(this._checkResponseStatus)
    }

    addMovieToSaved(movie) {
        return fetch(`${this._baseurl}/movies`, {
            method: 'POST',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(movie)
        })
        .then(this._checkResponseStatus)
    }

    deleteMovieLike(data) {
        return fetch(`${this._baseurl}/movies/${data._id}`, {
            method: 'DELETE',
            headers: {
                authorization: this._getToken(),
                'Content-Type': 'application/json',
            }
        })
        .then(this._checkResponseStatus)
    }
}

const api = new Api({
    baseUrl: 'https://api.nanamovies.nomoredomains.sbs',
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('jwt')}`,
        'Content-Type': 'application/json',
    }
});

export default api;