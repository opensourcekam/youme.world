/* global fetch Headers */
import { push } from 'react-router-redux';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SAVE_TOKEN } from '../types';

const ROOT_URL = 'http://localhost:8080';

const authUser = WanderId => ({
  type: AUTH_USER,
  payload: WanderId,
});

const unauthUser = () => ({
  type: UNAUTH_USER,
});

const saveToken = token => ({
  type: SAVE_TOKEN,
  payload: token,
});

const authError = error => ({
  type: AUTH_ERROR,
  payload: error,
});

export const signup = ({ email, password, ...rest }) => (dispatch) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  fetch(`${ROOT_URL}/signup`, {
    method: 'POST',
    headers,
    mode: 'cors',
    cache: 'default',
    body: JSON.stringify({ email, password, ...rest }),
  })
    .then((response) => {
      const contentType = response.headers.get('content-type');
      if (response.ok) {
        if (contentType && contentType.includes('application/json')) {
          response
            .json()
            .then(({ token = '' }) => {
              if (token) {
                dispatch(authUser());
                dispatch(saveToken(token));
                dispatch(push('/wanderer/welcome'));
              }
            });
        }
      } else {
        if (contentType && contentType.includes('application/json')) {
          response
            .json()
            .then((json) => {
              if (json) {
                console.log(json);
                return dispatch(authError(json));
              }
              return 0;
            });
        }

        throw new Error(response);
      }

      return 1;
    })
    .catch((error) => {
      dispatch(authError({ error }));
    });
};

export const signin = ({ email, password }) => (dispatch) => {
  fetch(`${ROOT_URL}/signin`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      console.log(response);
      if (response.ok) {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          response
            .json()
            .then(({ token = '', id }) => {
              if (token) {
                dispatch(authUser(id));
                dispatch(saveToken(token));
                dispatch(push('/wanderer/dash'));
              }
            });
        }
      } else {
        throw new Error(response.statusText);
      }

      return 1;
    })
    .catch((error) => {
      console.log(error);
      dispatch(authError({ error, text: 'password incorrect' }));
    });
};

export const signout = () => (dispatch) => {
  try {
    console.log('unauth');
    dispatch(unauthUser());
  } catch (error) {
    console.error(error);
  }

  return 1;
};

