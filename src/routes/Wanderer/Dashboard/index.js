import React from 'react';
import { Flex, Box } from 'grid-styled';
import {
  SideBar,
  ProfileImage,
  ButtonLink,
  TripCard,
} from 'feuxworks';
import styled from 'styled-components';
import TEMPIMG from '../../../images/outdoors.jpg';
import SelfIMG from '../../../images/self.jpg';

const CallToAction = styled(ButtonLink)`
	background-color: ${({ color }) => color || '#0ef776'};
	padding: 2rem;
	font-size: 1.5rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
`;

const InfoText = styled.p`
margin-bottom: 2.5rem;
text-transform: lowercase;
font-family: 'Pacifico', cursive;
`;

const WandererDash = () => (
  <Flex>
    <SideBar>
      <ProfileImage src={SelfIMG} alt="profile" />
      <p className="h5 xh2 bold">“White space is to be regarded as an active element, not a passive background.”</p>
    </SideBar>
    <Flex
      wrap
      mt="4rem"
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
      {/* <Box w={[1, 1, 1, 2 / 3]}>
        <InfoText className="h2 bold">Upcoming trips</InfoText>

      </Box>
      <Box w={[1, 1, 1, 1 / 3]} pl={['0', '0', '0', '1rem']}>
        <InfoText className="h2 bold">Dream Trips</InfoText>
      </Box> */}
    </Flex>
  </Flex>
);

export default WandererDash;
