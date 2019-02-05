import Auth from './Auth'

const SERVER_URL = 'http://localhost:3000'

class DataRequests {
  static post (url, data, authenticated) {
    let headers = {'Content-Type': 'application/json'}

    if (authenticated) {
      headers.Authorization = `bearer ${Auth.getToken()}`
    }

    return {
      url: SERVER_URL + url,
      method: 'POST',
      data: JSON.stringify(data),
      mode: 'cors',
      headers: headers
    }
  }

  static get (url, authenticated) {
    let headers = {'Content-Type': 'application/json'}

    if (authenticated) {
      headers.Authorization = `bearer ${Auth.getToken()}`
    }

    return {
      url: SERVER_URL  + url,
      method: 'GET',
      mode: 'cors',
      headers: headers
    }
  }
}

export default DataRequests
