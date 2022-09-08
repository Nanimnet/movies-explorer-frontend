const BASE_URL = 'https://api.nanamovies.nomoredomains.sbs';
const MOVIES_URL = 'https://api.nomoreparties.co/beatfilm-movies';
const SHORTMOVIES_DURATION = 40;
const DEVICE_PARAMS = {
  desktop: {
    width: 1150,
    cards: {
      total: 12,
      more: 3,
    },
  },
  tablet: {
    width: 480,
    cards: {
      total: 8,
      more: 2,
    },
  },
  mobile: {
    width: 318,
    cards: {
      total: 5,
      more: 2,
    },
  },
};

export { BASE_URL, MOVIES_URL, SHORTMOVIES_DURATION, DEVICE_PARAMS };
