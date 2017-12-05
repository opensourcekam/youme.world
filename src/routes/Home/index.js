import React from 'react';
import {
  HomeLead,
} from 'feuxworks';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import { compose } from 'recompose';
import { connect } from 'react-redux';
// import { verticalline } from '../../css';

const H2 = styled.h2`
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
const StyledHomeLead = styled(HomeLead)`
	h1 {
		margin: 0;
	}
	h2 {
		font-size: 3vw;
	}
`;
const StyledHomeLeadBlack = styled(HomeLead)`
h1 {
	color: #3A3A3A;
	margin: 0;
}
h2 {
	font-size: 3vw;
}

`;
const enhance = compose(connect(state => ({
  authenticated: state.auth,
}), null));

const Home = ({ authenticated }) =>
  (
    <main>
      <StyledHomeLead
        banner="#3A3A3A url(https://images.unsplash.com/photo-1505205296326-2178af1b47bf?auto=format&fit=crop&w=2000) no-repeat 100% center"
        header="youmeworld"
        lead="Travel with a purpose."
        button={{
				text: 'Have an adventure',
				link: (authenticated) ? '/wanderer/dash' : '/signup',
			}}
      />
      <Centered>
        <H2>How it works</H2>
        <StyledHomeLeadBlack
          banner="#3A3A3A url(https://images.unsplash.com/photo-1508881070183-8db4c3937880?auto=format&fit=crop&w=2000) no-repeat fixed center"
          header="Blogger driven"
          lead='Our trip plans are driven by you the "wanderer", make a new account to get started!'
          button={{
				text: 'Lets Wander',
				link: (authenticated) ? '/wanderer/dash' : '/signup',
				}}
        />
        <H2>Focus on experience</H2>
        <Centered>
          <StyledHomeLead
            banner="#3A3A3A url(https://images.unsplash.com/photo-1504886985223-7b2cad64c3ca?auto=format&fit=crop&w=2000) no-repeat fixed center"
            header="We've got your back"
            lead="Sit back relax, and yeah bring youme so you don't forget the best spots."
            button={{
						text: 'Wander worry free',
						link: (authenticated) ? '/wanderer/dash' : '/signup',
						}}
          />
        </Centered>

        <H2>Be a planner</H2>
        <Centered>
          <StyledHomeLead
            banner="#3A3A3A url(https://images.unsplash.com/photo-1490723412895-f49eb0a9ce0a?auto=format&fit=crop&w=2000) no-repeat fixed center"
            header="This could be your job"
            lead="Our blogging engine formulates blog post that you could get paid for!"
            button={{
						text: 'Be a wanderer',
						link: (authenticated) ? '/wanderer/dash' : '/signup',
						}}
          />
        </Centered>

      </Centered>
    </main>
  );

export default enhance(Home);
