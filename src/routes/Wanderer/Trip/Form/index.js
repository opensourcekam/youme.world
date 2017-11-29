import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { func } from 'prop-types';
import { newTrip } from '../../../../redux/actions/trip';
import NewTripForm from './newTripForm';


const enhance = compose(connect(null, dispatch => ({
  createNewTrip: data =>
    dispatch(newTrip(data)),
})));

const NewTrip = ({ createNewTrip }) => (
  <NewTripForm onSubmit={values => createNewTrip(values)} />
);

NewTrip.propTypes = {
  createNewTrip: func.isRequired,
};

export default enhance(NewTrip);
