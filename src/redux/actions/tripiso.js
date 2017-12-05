import axios from 'axios';
import { GET_DAYPLAN, HAS_DAYPLAN } from '../types';

const ACCOUNT_ID = '1L7LUDFO';
const AA1 = 'xexf8uy0j4utpyciyzf8ke2xi7t43vrd';

const getDayPlanAction = payload => ({
  type: GET_DAYPLAN,
  payload,
});

const hasDayPlanAction = payload => ({
  type: HAS_DAYPLAN,
  payload,
});

export const getDayPlan = dispatch => ({
  location, start, end, tripId,
}) => {
  axios.get(`https://www.triposo.com/api/20171027/day_planner.json?location_id=${location}&start_date=${start}&end_date=${end}&account=${ACCOUNT_ID}&token=${AA1}`)
    .then((response) => {
      const { data } = response;
      dispatch(getDayPlanAction({
        tripId,
        planner: data.results[0],
      }));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const hasDayPlanner = dispatch => ({ tripId, planner }) =>
  dispatch(hasDayPlanAction({ tripId, planner }));

