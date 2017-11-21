/* global localStorage */

import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SAVE_TOKEN } from '../types';

export default (state = {
  authenticated: false,
  WandererId: null,
  error: {
    text: '',
  },
}, action) => {
  switch (action.type) {
    case AUTH_USER:
      console.log(action);
      // localStorage.setItem('WandererId', action.payload);
      return {
        ...state,
        authenticated: true,
        WandererId: action.payload,
      };
    case UNAUTH_USER:
      localStorage.removeItem('token');
      return {
        ...state,
        authenticated: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: {
          text: action.payload.text,
        },
      };
    case SAVE_TOKEN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
      };

    default:
      return state;
  }
};
