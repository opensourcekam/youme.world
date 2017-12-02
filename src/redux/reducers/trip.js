/* global localStorage */
import moment from 'moment';

import { CREATE_TRIP } from '../types';

const initialState = {
  start: null,
  end: null,
  title: null,
  budget: 0,
  status: 'PLANNING',
  longName: '',
  place: '{}',
  photos: '[]',
  coordinates: {
    lat: null,
    lng: null,
  },
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
