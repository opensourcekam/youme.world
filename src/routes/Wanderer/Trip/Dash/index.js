import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Flex, Box } from 'grid-styled';
import ImagePalette from 'react-image-palette';
import { Map, Loader } from 'feuxworks';
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
import Collapsable from '../../../../components/Collapsable';
import SwipeSlider from '../../../../components/SwipeSlider';
import { getDayPlan, hasDayPlanner } from '../../../../redux/actions/tripiso';
import spinnerDuringLoading from '../../../../hocs/spinnerWhileLoading';

const enhance = compose(
  spinnerDuringLoading,
  connect((state => ({
    title: state.trip.title,
    budget: state.trip.budget,
    planner: state.tripiso,
  })), dispatch => ({
    getPlan: dispatch(getDayPlan),
    hasPlan: dispatch(hasDayPlanner),
  })),
);

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
const MapContainer = styled.div`
	position: relative;
	left: 0rem;

	width: 100%;
	height: 18rem;
	background-color: #fff;
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
            <LocationText	color="#fff">{trip.longName}</LocationText>
          </CenteredTextOverImage>
				)}
      </ImagePalette>}

      <SwipeSlider>
        {JSON.parse(trip.photos).reverse().map(src => (
          <Box>
            <img style={{ maxHeight: '300px' }} src={src} alt={trip.longName} />
          </Box>
				))}
      </SwipeSlider>
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
              <CallToFocus>Map</CallToFocus>
              <MapContainer>
                <Map
                  center={trip.coordinates}
                  zoom={10}
                />
              </MapContainer>
            </PlannerItem>

            <PlannerItem>
              
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
              <CallToFocus>Travel style</CallToFocus>
              <TravelStyle />
            </PlannerItem>

            <PlannerItem>
              <CallToFocus>Checklist</CallToFocus>
              <TodoList />
            </PlannerItem>

            <PlannerItem>
              <CallToFocus>Saving Money</CallToFocus>
              <Collapsable>
                <ModalButton InnerModal={<SaveForTrip />}>help me save</ModalButton>
              </Collapsable>
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
