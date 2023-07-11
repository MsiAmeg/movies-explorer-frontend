class AuthApi {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _request(url, options) {
    return fetch(url, options).then(this._renderResponse);
  }

  _renderResponse(res) {
    if (res.ok) return res.json();

    return Promise.reject(`Ошибка: ${res.status}`);
  }

  registration(name, email, password) {
    return this._request(`${this._url}/signup`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password
      })
    });
  }

  signIn(password, email) {
    return this._request(`${this._url}/signin`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
      body: JSON.stringify({
        password,
        email
      })
    })
  }

  signOut() {
    return this._request(`${this._url}/users/me/signout`, {
      method: 'POST',
      credentials: 'include',
      headers: this._headers,
    })
  }


  validateUserData() {
    return this._request(`${this._url}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    })
  }
}

const authApi = new AuthApi({
  url: "http://localhost:3001",
  // url: "https://api.rekunir.diplom.nomoredomains.rocks",
  headers: {
    'Content-Type': 'application/json',
  }
});

export default authApi;
