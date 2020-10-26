import config from '../config';
import TokenService from './token-service';

const UserService = {
  getPoints() {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
    })
    .then(res => {
      return (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
  updateUser(user) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(user),
    })
    .then(res => {
      return (!res.ok) ? res.json().then(e => Promise.reject(e)) : res.json();
    });
  },
}

export default UserService;