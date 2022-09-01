import { BASE_URL } from './constants.js';

export function register({ password, email, name }) {
    return fetch(`${BASE_URL}/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ password, email, name })
    })
    .then(checkResponseStatus)
}

export function authorize({ password, email }) {
    return fetch(`${BASE_URL}/signin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, 
        body: JSON.stringify({ password, email })
    })
    .then(checkResponseStatus)
};

export function checkToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${jwt}`,
        }
    })
    .then(checkResponseStatus)
}


function checkResponseStatus(res) {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`)
}