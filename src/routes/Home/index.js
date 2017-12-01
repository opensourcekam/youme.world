import React from 'react';
import {
  HomeLead,
} from 'feuxworks';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { verticalline } from '../../css';

const H2 = styled.h2`
	 ${verticalline}
	 margin-bottom: 4.5em;
	 color: #3D3E40;
`;

const ImageCta = styled.img`
	border-radius: 50%;
	margin: 0 0 2em 0;
`;

const Centered = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
  column: true,
})`
	text-align: center;
`;

const H3 = styled.h3`
	font-weight: 300;
`;

const Home = () =>
  (
    <main>
      <HomeLead
        banner="#123093 url(https://images.unsplash.com/photo-1488628278511-2177a435414d?dpr=1&auto=compress,format&fit=crop&w=2851&h=&q=80&cs=tinysrgb&crop=)"
        header="youme.plan"
        lead="Your friends. Your experiences. Your life."
        button={{
				text: 'Have an adventure',
				link: '/signup',
			}}
      />
      <Centered
        p={['3rem', '15rem']}
      >
        <H2>How it works</H2>
        <Centered>
          <H3>This version of youme.world is designed to help you find things to do in your dream destinations!</H3>
        </Centered>

        <H2>Focus on experience</H2>
        <Centered>
          <ImageCta src="//unsplash.it/300/?random" />
          <H3>We develped youme.plan so you can enjoy each and every day of your travels without simultaneously needing to plan ever moment. We've got that covered for you! Better yet you can have a local help you plan your day and maybe even be your personal tour guide!</H3>
        </Centered>

        <H2>Be a planner</H2>
        <Centered>
          <ImageCta src="//unsplash.it/310/?random" />
          <H3>You can generate income by becoming a planner or host in the city you can be a bomb ass host in! It's simple tell us a bit about you and we will match you with a visitor who needs your help to have the time of their life!</H3>
        </Centered>

      </Centered>
    </main>
  );

export default Home;
