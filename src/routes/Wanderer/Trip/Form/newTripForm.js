import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { Flex, Box } from 'grid-styled';
import { compose } from 'recompose';
import { reduxForm } from 'redux-form';
import styled, { keyframes } from 'styled-components';
import { Banner, Button, MapCard, CalendarCard } from 'feuxworks';
import Typist from 'react-typist';

const enhance = compose(
  connect((state) => {
    const placeData = get(state.form['new-trip'], 'values.place');
    const data = (typeof placeData === 'string') ? JSON.parse(placeData) : {};

    return ({
      formattedAddress: data.formatted_address,
    });
  }, null),
  reduxForm({
    form: 'new-trip',
  }),
);

const Form = styled.form`
`;
const fadeInRight = keyframes`
	0% {
		 opacity: 0;
		 transform: translateX(-100px);
	}
	100% {
		 opacity: 1;
		 transform: translateX(0);
	}`;

const FadeIn = styled.h2`
	animation: ${fadeInRight} 300ms;
`;

const NewTripForm = ({
  handleSubmit, onSubmit, pristine, submitting, formattedAddress,
}) => (
  <Form onSubmit={handleSubmit(onSubmit)}>
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
  </Form>
);

export default enhance(NewTripForm);
