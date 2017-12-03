import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Flex, Box } from 'grid-styled';

const DateTainer = styled(Box)`
`;
const Date = styled.span`
	font-weight: lighter;
	color: rgba(0, 0, 0, .6);
`;
const To = styled.span``;

const getDiff = (start, end) => moment(end).diff(start, 'days');

const TripDates = ({ start, end }) => (
  <Flex flex="1 1 100%">
    <DateTainer>
      <Date>{getDiff(start, end)} day trip!</Date>
    </DateTainer>
  </Flex>
);

TripDates.propTypes = {};
TripDates.defaultProps = {};

export default TripDates;
