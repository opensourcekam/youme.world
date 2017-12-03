import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { compose } from 'recompose';
import {
  SideBar,
  ProfileImage,
  ButtonLink,
} from 'feuxworks';
import TripCard from '../../../components/TripCard';
import InfoText from '../../../components/InfoText';
import TEMPIMG from '../../../images/outdoors.jpg';
import SelfIMG from '../../../images/user.png';
import withQuery from './query';

const enhance = connect(state => ({
  WandererId: state.auth.WandererId,
  ...state,
}));

const CallToAction = styled(ButtonLink)`
	background-color: ${({ color }) => color || '#0ef776'};
	padding: 2rem;
	font-size: 1.5rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

const WandererDash = ({ trips = [{}, {}], loading }) => console.log(trips) ||
  (<Flex>
    <SideBar>
      <ProfileImage src={SelfIMG} alt="profile" />
      <p className="h5 xh2 bold">“White space is to be regarded as an active element, not a passive background.”</p>
    </SideBar>
    <Flex
      wrap
      mt="4rem"
      flex="1 1 100%"
      ml="1rem"
      mr="1rem"
      justify="space-around"
    >
      <Flex flex="1 1 100%" wrap justify="space-between" mt="1.5rem">
        <Box>
          <CallToAction to="/wanderer/new/trip">New Trip</CallToAction>
          <CallToAction color="#0ed2f7" to="/wanderer/inspiration">Get Inspired</CallToAction>
        </Box>
        <Box />
      </Flex>
      <Box w={[1, 1, 1, 1 / 3]}>
        <InfoText>Upcoming trips</InfoText>
        {!loading && (trips.slice(0).reverse()).map(trip => (
          <TripCard data={{
							to: `/wanderer/trip/${trip.id}`,
							locationName: trip.country,
							backgroundImg: trip.photos.length && JSON.parse(trip.photos)[0],
							cheapestFlight: '437',
							currencySymbol: '$',
							...trip,
						}}
          />
			 ))}
      </Box>
      {/* <Box w={[1, 1, 1, 1 / 3]} pl={['0', '0', '0', '1rem']}>
        <InfoText className="h2 bold">Dream Trips</InfoText>
        <TripCard data={{ to: '#', backgroundImg: TEMPIMG }} />
      </Box> */}
    </Flex>
  </Flex>
  );

export default enhance(withQuery(WandererDash));
