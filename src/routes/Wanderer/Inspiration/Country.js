import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';
import ImagePalette from 'react-image-palette';
import {
  Banner,
} from 'feuxworks';
import LongName from '../../../components/LongName';
import CenteredTextOverImage from '../../../components/CenteredTextOverImage';

const ContentWrap = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
})`
	text-align: center;
`;

const Country = LongName.extend`
	/* color: #3A3A3A; */
	font-size: 440%;
`;


const CountryInspiration = props => (
  <ContentWrap column my="4.5rem">
    <ImagePalette image="https://picsum.photos/200/?random" crossOrigin="Anonymous">
      {({ backgroundColor, color, alternativeColor }) => (
        <CenteredTextOverImage
          backgroundColor={backgroundColor}
          color={color}
          alternativeColor={alternativeColor}
          src="https://picsum.photos/1200/1200/?random"
        >
          <Country	color="#fff">
            {props.match.params.country}
          </Country>
        </CenteredTextOverImage>
				)}
    </ImagePalette>
    <Box mx="1rem">
      <h3 style={{ fontWeight: '400' }}>
				Hey thanks for being a part of this community!
      </h3>
      <h4	color="#3A3A3A" style={{ fontWeight: '300' }}>
			As we gather more data about this {props.match.params.country} from your adventures we will be able to generate new inspirationl content, and trips for you! Help us help wanderers and submit lots of trip data!
      </h4>
    </Box>
  </ContentWrap>
);

CountryInspiration.propTypes = {

};

export default CountryInspiration;
