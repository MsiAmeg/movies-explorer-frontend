class MainApi {
  constructor(config) {
    this._url = config.url;
    this._headers = config.headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._renderResponse)
  }

  _renderResponse(res) {
    if (res.ok) {
      return res.json();
    }

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies() {
    return this._request(`${this._url}/movies`, {
      credentials: 'include',
      headers: this._headers
    })
  }

  setCard({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    id,
    nameRU,
    nameEN,
  }) {
    return this._request(`${this._url}/movies`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image: `https://api.nomoreparties.co${image.url}`,
        trailerLink,
        thumbnail: `https://api.nomoreparties.co${image.formats.thumbnail.url}`,
        movieId: id,
        nameRU,
        nameEN,
      })
    })
  }

  deleteCard(cardId) {
    return this._request(`${this._url}/movies/${cardId}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: this._headers
    })
  }

  getUserData() {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    })
  }

  setUserData({ name, email }) {
    return this._request(`${this._url}/users/me`, {
      method: 'PATCH',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email
      })
    })
  }

  toggleLike(cardId, isLiked) {
    return this._request(`${this._url}/cards/${cardId}/likes`, {
      method: isLiked ? 'DELETE' : 'PUT',
      credentials: 'include',
      headers: this._headers
    })
  }
}

const mainApi = new MainApi({
  url: "http://localhost:3001",
  // url: "https://api.rekunir.diplom.nomoredomains.rocks",
  headers: {
    'Content-Type': 'application/json',
  },
});
export default mainApi;
