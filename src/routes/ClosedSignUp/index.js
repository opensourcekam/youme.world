import React from 'react';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import closed from '../../images/cave.jpg';

const ClosedSignup = styled(Flex).attrs({
  mt: '4.5rem',
  column: true,
  justify: 'center',
  align: 'center',
})`
	height: 90vh;
	text-align: center;
	background: #eee url(${closed});
	background-size: cover;	
`;
const Callout = styled.h1`
	font-size: 200%;
	font-weight: 600;
	color: #fff;
	padding: 0 1rem;
`;
const CalloutRed = styled.h1`
	font-size: 250%;
	font-weight: 700;
	color: #F84526;
`;

const H2 = styled.h2`
	font-size: 200%;
	font-weight: 300;	
	> * {
		color: #fff;
		transition: color 200ms ease-in;
		&:hover{
			color: #1CFF54;
		}
	}
`;

const Closed = () => (
  <ClosedSignup>
    <Callout>Signup is currently invite only, please contact us or click the link below to be invited.</Callout>
    <H2><a href="http://youme.world">Invite link!</a></H2>
    <H2><a href="mailto: youmeworld.app@gmail.com">Email youme.world team</a></H2>
    <CalloutRed>Only 140 seats are left to be given, signup soon!</CalloutRed>
  </ClosedSignup>
);

export default Closed;
