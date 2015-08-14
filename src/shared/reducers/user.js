import * as Constants from '../constants/constants';

const initialState = {
  loading: true,
  error: false,
  username: null
};

export default function user(state = initialState, action) {

  switch(action.type) {

    case Constants.BEGIN_LOADING_USER:
      return {
        loading: true,
        error: false,
        username: null
      };

    case Constants.SUCCESS_LOADING_USER:
      return {
        loading: false,
        error: false,
        ...action.payload
      };

    case Constants.ERROR_LOADING_USER:
      return {
        loading: false,
        error: action.payload,
        username: null
      };

    default:
      return state;
  }
}
