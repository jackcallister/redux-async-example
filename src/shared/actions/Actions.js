import {
  BEGIN_LOADING_USER,
  SUCCESS_LOADING_USER,
  ERROR_LOADING_USER
} from '../constants/constants';

const WebUtils = {

  loadUser: function() {
    return new Promise((resolve, reject) => {
      // Fake API call (always triggers success)
      const payload = {
        username: 'Username'
      };

      setTimeout(() => {
        resolve(payload);
      }, 1200);
    });
  }
};

export function beginLoadingUser() {
  return {
    promise: WebUtils.loadUser(),
    types: [BEGIN_LOADING_USER, SUCCESS_LOADING_USER, ERROR_LOADING_USER]
  }
}

export function successLoadingUser(payload) {
  return {
    type: SUCCESS_LOADING_USER,
    payload: payload
  }
}

export function errorLoadingUser(payload) {
  return {
    type: ERROR_LOADING_USER,
    payload: payload
  }
}
