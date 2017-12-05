import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Box } from 'grid-styled';
import moment from 'moment';

const DateTainer = styled(Box)``;
const Date = styled.span`
	font-weight: lighter;
	color: rgba(0, 0, 0, .6);
`;

const getDiff = (start, end) => moment(end).diff(start, 'days') + 1;

const TripDates = ({ start, end }) => (
  <div>
    <DateTainer>
      <Date>{getDiff(start, end)} day trip!</Date>
    </DateTainer>
  </div>
);

TripDates.propTypes = {};
TripDates.defaultProps = {};

export default TripDates;
