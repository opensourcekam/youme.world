import React from 'react';
import { connect } from 'react-redux';
import { node, bool } from 'prop-types';
import styled from 'styled-components';
import {
  ContentContainer,
  Foundation,
  Footer,
  ResponsiveNav,
  CTAButton,
  Button,
} from 'feuxworks';

const SignoutButton = styled(Button)`
	background: #FF2640;
	color: #fff;
`;
const InspiredButton = styled(Button)`
	background: #00FFFF;
`;

const footerAboutLinks = [
  { to: '/who_are_we', text: 'Who are we?' },
  { to: '/jobs', text: 'Become an advisor' },
  { to: '/Privacy policy', text: 'Our policies' },
  { to: '/terms', text: 'Terms' },
];

const Layout = ({ children, auth, ...props }) => {
  const buttonLink = (auth.authenticated) ? [
    { to: '/wanderer/dash', text: 'Lets Wander', component: Button },
    { to: '/inspiration', text: 'Inspiration', component: InspiredButton },
    { to: '/signout', text: 'Signout', component: SignoutButton },
  ] : [
    { to: '/signin', text: 'Lets Wander', component: CTAButton },
    { to: 'http://youme.world', text: 'Get invited', component: CTAButton },
  ];

  const navLinks = [
    ...buttonLink,
  ];

  return (
    <Foundation>
      <ResponsiveNav links={navLinks} />
      <ContentContainer>
        {children}
      </ContentContainer>
      <Footer
        aboutLinks={footerAboutLinks}
        appName="youme.world"
      />
    </Foundation>
  );
};

Layout.propTypes = {
  children: node.isRequired,
  authenticated: bool.isRequired,
};

export default connect(state => state, null)(Layout);
