import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Flex, Box } from 'grid-styled';
import ImagePalette from 'react-image-palette';
import withQuery from './query';
import LongName from '../../../../components/LongName';
import CenteredTextOverImage from '../../../../components/CenteredTextOverImage';
import TodoList from '../../../../components/TodoList';

const enhance = connect((state => console.log(state) || ({
  title: state.trip.title,
  budget: state.trip.budget,
})), null);

const LocationText = styled(LongName)`
	color: ${({ color }) => color}
`;

const TripDash = ({ loading, trip }) => (
  <Flex column mt="4.5rem">
    <Flex column>
      {JSON.parse(trip.photos)[0] &&
      <ImagePalette image={trip.photos.length && JSON.parse(trip.photos)[0]} crossOrigin="Anonymous">
        {({ backgroundColor, color, alternativeColor }) => (
          <CenteredTextOverImage
            backgroundColor={backgroundColor}
            color={color}
            alternativeColor={alternativeColor}
            src={JSON.parse(trip.photos)[0]}
          >
            <LocationText	color={color}>{trip.longName}</LocationText>
          </CenteredTextOverImage>
				)}
      </ImagePalette>
		}


      <Flex style={{ overflow: 'scroll' }}>
        {JSON.parse(trip.photos).map(src => (
          <Box>
            <img style={{ maxHeight: '300px' }} src={src} alt={trip.longName} />
          </Box>
				))}
      </Flex>
			<Box px="4rem">
				<TodoList />
			</Box>
    </Flex>

    {/* <Box>
      <LongName>{trip.longName}</LongName>
      <p>{trip.budget}</p>
      <p>{trip.status}</p>
      <p>{trip.coordinates.lat}</p>
      <p>{trip.coordinates.lng}</p>
      <p>{trip.start}</p>
      <p>{trip.end}</p>
    </Box> */}
    {/* <pre>
      {JSON.stringify(props.trip, null, 3)}
    </pre> */}
  </Flex>
);

export default withQuery(enhance(TripDash));
