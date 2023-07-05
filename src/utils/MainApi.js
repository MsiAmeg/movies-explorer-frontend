class MainApi {
    constructor(config){
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
  
    getInitialCards() {
      return this._request(`${this._url}/cards`, {
        credentials: 'include',
        headers: this._headers
      })
    }
  
    setCard({name, link}){
      return this._request(`${this._url}/cards`, {
        method: 'POST',
        credentials: 'include',
        headers: this._headers,
        body: JSON.stringify({
          name,
          link
        })
      })
    }
  
    deleteCard(cardId){
      return this._request(`${this._url}/cards/${cardId}`, {
        method: 'DELETE',
        credentials: 'include',
        headers: this._headers
      })
    }
  
    getUserData(){
      return this._request(`${this._url}/users/me`, {
        credentials: 'include',
        headers: this._headers,
      })
    }
  
    setUserData({name, email}){
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
  
    toggleLike(cardId, isLiked){
      return this._request(`${this._url}/cards/${cardId}/likes`, {
        method: isLiked ? 'DELETE' : 'PUT',
        credentials: 'include',
        headers: this._headers
      })
    }
  }

const mainApi = new MainApi({
    // url: "https://api.rekunir.frontend.nomoredomains.rocks",
    url: "http://localhost:3001",
    headers: {
      'Content-Type': 'application/json',
    },
  });
export default mainApi;