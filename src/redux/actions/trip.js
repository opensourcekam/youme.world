// import axios from 'axios';
import { push } from 'react-router-redux';
import { get } from 'lodash';
import { CREATE_TRIP } from '../types';

const ROOT_URL = '//youme-data-youme.b9ad.pro-us-east-1.openshiftapps.com';

const createTrip = data => ({
  type: CREATE_TRIP,
  payload: {
    ...data,
  },
});

export const newTrip = data => (dispatch) => {
  console.info(`
  						 NEW TRIP
  					ACTION + DATA
  			----------------------

  	${JSON.stringify(data, null, 3)}
		// apollo client hockup for sending data to server goes under here
  `);
  dispatch(createTrip({ ...data }));
  dispatch(push('/wanderer/trip/#id'));
};

export const noop = () => {};
