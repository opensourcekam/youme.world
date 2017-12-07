import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import InterestCheckboxGrid from '../InterestCheckboxGrid';
import Collapsable from '../Collapsable';

const TravelStyleText = styled.h4`
	font-weight: 300;
`;

const travelStyles = [
  {
    image: '',
    name: 'Duffel Bag',
  },
  {
    image: '',
    name: 'Wheeled Backpack',
  },
  {
    image: '',
    name: 'Travel Backpack',
  },
  {
    image: '',
    name: 'Carry-On',
  },
];

const TravelStyle = props => (
  <Collapsable>
    <InterestCheckboxGrid data={travelStyles} />
  </Collapsable>
);

TravelStyle.propTypes = {};
TravelStyle.defaultProps = {};

export default TravelStyle;
