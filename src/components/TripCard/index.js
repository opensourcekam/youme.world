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
    {/* <TopBar>
       <Flex
        flex="1 1 auto"
        wrap
        align="center"
        justify="space-between"
        mt=".5rem"
        mb=".5rem"
      >
        <LocationName>{data.locationName}</LocationName>
        <RightWrap>
          <Box mr=".5rem">
            <Icon name="plane" size="2rem" fill="#0ef776" />
          </Box>
          <h3>{data.currencySymbol}{data.cheapestFlight}</h3>
        </RightWrap>
      </Flex>
			</TopBar>
			<Image src={data.backgroundImg} alt="city x" />

		*/}
    {/* <CenteredTextOverImage src={data.backgroundImg}>
      <LongName>{data.locationName}</LongName>
    </CenteredTextOverImage> */}
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
