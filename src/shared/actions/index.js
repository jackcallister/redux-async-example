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

