import React from 'react';
import styled from 'styled-components';
import { string } from 'prop-types';
import { DateRangePicker } from 'react-dates';
import moment from 'moment';

// const convertTo = date => moment(date).format('MMM Do,YYYY');
const TripDates = ({ start, end }) => (
  <DateRangePicker
    startDate={moment(start)}
    endDate={moment(end)}
    readOnly
    noBorder
  />
);

TripDates.propTypes = {
  start: string.isRequired,
  end: string.isRequired,
};

export default TripDates;
