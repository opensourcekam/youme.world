import React from 'react';
import { Flex, Box } from 'grid-styled';
import { string, shape } from 'prop-types';
import ImagePalette from 'react-image-palette';
import styled, { keyframes } from 'styled-components';
import CardLink from '../CardLink';
import LongName from '../LongName';
import CenteredTextOverImage from '../CenteredTextOverImage';

const grow = keyframes`0% {transform: scale(0);} 50% {transform: scale(1.2);}`;
const Trip = styled(CardLink)`
	margin-bottom: 5rem;
	display: flex;
	flex-direction: column;
	animation: ${grow} 400ms ease-in-out;
`;

const LocationText = styled(LongName)`
	position: absolute;
	top: 65%;
	color: ${({ color }) => color};
`;

const TripCard = ({
  data,
}) => (
  <Trip to={data.to}>
    <ImagePalette image={data.backgroundImg} crossOrigin="Anonymous">
      {({ backgroundColor, color, alternativeColor }) => (
        <CenteredTextOverImage
          src={data.backgroundImg}
          backgroundColor={backgroundColor}
          color={color}
          alternativeColor={alternativeColor}
        >
          <LocationText	color={color}>{data.locationName}</LocationText>
        </CenteredTextOverImage>
			)}
    </ImagePalette>
  </Trip>
);

TripCard.propTypes = {
  data: shape({
    locationName: string.isRequired,
    to: string.isRequired,
    backgroundImg: string.isRequired,
    cheapestFlight: string,
    currencySymbol: string,
  }).isRequired,
};

TripCard.defaultProps = {
  data: {
    locationName: '...trippin',
    cheapestFlight: 'Post cheap flight?',
    currencySymbol: '$',
  },
};

export default TripCard;
