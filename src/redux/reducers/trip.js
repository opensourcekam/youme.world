/* global localStorage */
import moment from 'moment';

import { CREATE_TRIP } from '../types';

const initialState = {
  location: '',
  lat: null,
  lng: null,
  start: moment(),
  end: moment().add(3, 'days'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TRIP:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
