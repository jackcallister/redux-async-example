import {
  BEGIN_LOADING_USER,
  SUCCESS_LOADING_USER,
  ERROR_LOADING_USER
} from '../constants/constants';

const initialState = {
  loading: true,
  error: false,
  username: null
};

export default function user(state = initialState, action) {

  switch(action.type) {

    case BEGIN_LOADING_USER:
      return {
        loading: true,
        error: false,
        username: null
      };

    case SUCCESS_LOADING_USER:
      return {
        loading: false,
        error: false,
        ...action.payload
      };

    case ERROR_LOADING_USER:
      return {
        loading: false,
        error: action.payload,
        username: null
      };

    default:
      return state;
  }
}
