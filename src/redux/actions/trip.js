import { push } from 'react-router-redux';
import { get } from 'lodash';

export const pushToTrip = ({ data }) => (dispatch) => {
  const tripId = get(data.createTrip, 'tripId', 0);
  dispatch(push(`/wanderer/trip/${tripId}`));
};

export const noop = () => {};
