import config from '../config';
import TokenService from './token-service';

const RewardsApiService = {
  getReward() {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'GET',
      header: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res => 
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  addReward(reward) {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(reward),
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e.message))
          : res.json()
      );
  },
  modifyReward(modify) {
    return fetch(`${config.API_ENDPOINT}/rewards`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json',
        'authorization': `Bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(modify)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e.message))
          : res.json()
      );
  }
};

export default RewardsApiService;