import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Flex, Box } from 'grid-styled';
import ImagePalette from 'react-image-palette';
import withQuery from './query';
import LongName from '../../../../components/LongName';
import CenteredTextOverImage from '../../../../components/CenteredTextOverImage';
import TodoList from '../../../../components/TodoList';
import TripDates from '../../../../components/TripDates';
import TotalTripTime from '../../../../components/TotalTripTime';
import SaveForTrip from '../../../../components/SaveForTrip';
import ModalButton from '../../../../components/ModalButton';
import DayPlan from '../../../../components/DayPlan';
import TravelStyle from '../../../../components/TravelStyle';
import ScrollFlex from '../../../../components/ScrollFlex';
import { getDayPlan, hasDayPlanner } from '../../../../redux/actions/tripiso';

const enhance = compose(connect((state => ({
  title: state.trip.title,
  budget: state.trip.budget,
  planner: state.tripiso,
})), dispatch => ({
  getPlan: dispatch(getDayPlan),
  hasPlan: dispatch(hasDayPlanner),
})));

const LocationText = styled(LongName)`
	color: ${({ color }) => color}
`;

const PlannerItem = styled(Box).attrs({
  my: '0.5rem',
})``;

const ThePlans = styled.div`
`;
const CallToFocus = styled.h2`
	font-weight: 200;
	margin-bottom: 0;
	color: rgba(0, 0, 0, .6);
`;
const PhotoScroll = styled(ScrollFlex)`
	padding: 1rem 0;
`;

const TripDash = ({
  loading, trip, getPlan, hasPlan, planner,
}) => !loading && (
  <Flex column mt="4.5rem" flex="1 1 100%">
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
      </ImagePalette>}

      <PhotoScroll>
        {JSON.parse(trip.photos).reverse().map(src => (
          <Box>
            <img style={{ maxHeight: '300px' }} src={src} alt={trip.longName} />
          </Box>
				))}
      </PhotoScroll>
      <ThePlans>
        <Box px="2rem" id="box">
          <Flex column justify="center" align="center">
            <PlannerItem>
              <TripDates start={trip.start} end={trip.end} />
            </PlannerItem>

            <PlannerItem>
              <TotalTripTime start={trip.start} end={trip.end} />
            </PlannerItem>
          </Flex>

          <Flex column>
            <PlannerItem>
              <CallToFocus>Itinerary</CallToFocus>
              <DayPlan
                getPlan={getPlan}
                hasPlan={hasPlan}
                planner={planner}
                country={trip.country}
                start={trip.start}
                end={trip.end}
                tripId={trip.tripId}
              />
            </PlannerItem>
            <PlannerItem>
              <CallToFocus>Map</CallToFocus>
            </PlannerItem>
            <PlannerItem>
              <CallToFocus>Saving Money</CallToFocus>
              <ModalButton InnerModal={<SaveForTrip />}>help me save</ModalButton>
            </PlannerItem>
            <PlannerItem>
              <CallToFocus>Before you go!</CallToFocus>
              <TodoList />
            </PlannerItem>
            <PlannerItem>
              <CallToFocus>Travel style</CallToFocus>
              <TravelStyle />
            </PlannerItem>
          </Flex>
        </Box>
      </ThePlans>
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
