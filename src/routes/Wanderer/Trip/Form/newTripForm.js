import React from 'react';
import Typist from 'react-typist';
import moment from 'moment';
import { get } from 'lodash';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import { reduxForm } from 'redux-form';
import styled, { keyframes } from 'styled-components';
import { func, bool, string } from 'prop-types';
import { Button, MapCard, CalendarCard } from 'feuxworks';
import { withHandlers, withState, compose } from 'recompose';

import { createTrip } from '../../../../graphql/mutations/trip';
import { pushToTrip } from '../../../../redux/actions/trip';

const fadeInRight = keyframes`0% {opacity: 0;transform: translateX(-100px);}100% {opacity: 1;transform: translateX(0);}`;
const FadeIn = styled.h2`animation: ${fadeInRight} 300ms;`;

const NewTripForm = ({
  handleSubmit, pristine,
  submitting, formattedAddress,
}) => (
  <form onSubmit={handleSubmit}>
    <Flex flex="1 1 100%" column pt="5.5rem" m={['1rem', '5rem']} mt="0rem" mb="0rem">
      <Box ml="1rem">
        <Typist cursor={{ show: false }}>
          <h1>
						Lets plan a trip
          </h1>
        </Typist>
        {formattedAddress && <FadeIn>to {formattedAddress}!</FadeIn>}
        <h2>the basics.</h2>
      </Box>
      <Box>
        <MapCard
          name="location"
          placeholder="Where to next?"
          zoom={12}
        />
      </Box>
      <Box>
        <CalendarCard />
      </Box>
      <Button type="submit" disabled={pristine || submitting}>
						Trip view
      </Button>
    </Flex>
  </form>
);

NewTripForm.propTypes = {
  handleSubmit: func.isRequired,
  pristine: bool.isRequired,
  onSubmit: func.isRequired,
  submitting: bool.isRequired,
  formattedAddress: string.isRequired,
};

export default compose(
  withState('submitted', 'setSubmitted', false),
  createTrip,
  connect((state) => {
    const WandererId = get(state.auth, 'WandererId');
    const placeData = get(state.form['new-trip'], 'values.place');
    const data = (typeof placeData === 'string') ? JSON.parse(placeData) : {};

    return ({
      formattedAddress: data.formatted_address,
      WandererId,
      start: moment().add(7, 'days'),
      end: moment().add(14, 'days'),
    });
  }, dispatch => ({
    gotoTrip: ({ ...data }) =>
      dispatch(pushToTrip({ data })),
  })),
  withHandlers({
    onSubmit: ({
      createTrip, WandererId,
    }) => values => console.log(values) || createTrip({
      ...values,
      WandererId,
    }),
    onSubmitSuccess: ({ gotoTrip }) => (trip) => {
      gotoTrip(trip.data);
    },
  }),
  reduxForm({
    form: 'new-trip',
  }),
)(NewTripForm);
