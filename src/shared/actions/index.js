import webUtils from '../webutils'

import {
  BEGIN_LOADING_USER,
  SUCCESS_LOADING_USER,
  ERROR_LOADING_USER
} from '../constants/constants';

export function beginLoadingUser() {
  return {
    promise: webUtils.fetchUser(),
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
