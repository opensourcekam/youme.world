import React from 'react';
import {
  HomeLead,
  Card,
} from 'feuxworks';
import styled from 'styled-components';
import { verticalline } from '../../css';

const H2 = styled.h2`
	 ${verticalline}
	 margin-bottom: 4.5em;
	 color: #3D3E40;
`;

const ContentWrap = styled(Card)`
	padding: 0 20rem;
`;

const ImageCta = styled.img`
	border-radius: 50%;
	margin: 0 0 2em 0;
`;

const Home = () =>
  (
    <main>
      <HomeLead
        banner="#123093 url(https://images.unsplash.com/photo-1488628278511-2177a435414d?dpr=1&auto=compress,format&fit=crop&w=2851&h=&q=80&cs=tinysrgb&crop=)"
        header="youme.plan"
        lead="Your friends. Your experiences. Your life."
        button={{
				text: 'Do something',
				link: '/signup',
			}}
      />
      <ContentWrap>
        <H2>How it works</H2>
        <div>
          <p>Velit nulla adipisicing incididunt id in pariatur in consectetur minim aute id. Nulla incididunt cupidatat est magna fugiat irure voluptate fugiat aliqua nulla non consectetur aute ex. Sit ad dolore veniam ea sint. Aute dolor pariatur do adipisicing irure est in. Magna ullamco veniam labore voluptate velit. Sint nostrud cillum pariatur amet dolore magna minim ut est proident irure labore nostrud. Veniam est qui laborum veniam commodo sunt ipsum fugiat sunt.</p>
        </div>

        <H2>Focus on experience</H2>
        <div>
          <ImageCta src="//unsplash.it/300/?random" />
          <p>We develped youme.plan so you can enjoy each and every day of your travels without simultaneously needing to plan ever moment. We've got that covered for you! Better yet you can have a local help you plan your day and maybe even be your personal tour guide!</p>
        </div>

        <H2>Be a planner</H2>
        <div>
          <ImageCta src="//unsplash.it/310/?random" />
          <p>You can generate income by becoming a planner or host in the city you can be a bomb ass host in! It's simple tell us a bit about you and we will match you with a visitor who needs your help to have the time of their life!</p>
        </div>

      </ContentWrap>
    </main>
  );

export default Home;
