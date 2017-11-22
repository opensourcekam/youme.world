import axios from 'axios';
import { push } from 'react-router-redux';
import { AUTH_USER, AUTH_ERROR, UNAUTH_USER, SAVE_TOKEN } from '../types';

const ROOT_URL = '//youme-data-youme.b9ad.pro-us-east-1.openshiftapps.com';
// const ROOT_URL = '//localhost:8080';

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
  axios.post(`${ROOT_URL}/signup`, {
    email,
    password,
    ...rest,
  })
    .then((response) => {
      if (response.statusText === 'OK') {
        const { token } = response.data;
        if (token) {
          dispatch(authUser());
          dispatch(saveToken(token));
          dispatch(push('/wanderer/welcome'));
        }
      }
    })
    .catch((error) => {
      dispatch(authError({ error }));
    });
};

export const signin = ({ email, password }) => (dispatch) => {
  axios.post(`${ROOT_URL}/signin`, {
    email,
    password,
  })
    .then((response) => {
      if (response.statusText === 'OK') {
        const { token, id } = response.data;
        if (token) {
          dispatch(authUser(id));
          dispatch(saveToken(token));
          dispatch(push('/wanderer/dash'));
        }
      }
    })
    .catch((error) => {
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

