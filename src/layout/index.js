import React from 'react';
import { connect } from 'react-redux';
import { node, bool } from 'prop-types';

import {
  ContentContainer,
  Foundation,
  Footer,
  ResponsiveNav,
  CTAButton,
  // SignoutButton,
} from 'feuxworks';

const footerAboutLinks = [
  { to: '/who_are_we', text: 'Who are we?' },
  { to: '/jobs', text: 'Become an advisor' },
  { to: '/Privacy policy', text: 'Our policies' },
  { to: '/terms', text: 'Terms' },
];

const Layout = ({ children, auth, ...props }) => {
  const buttonLink = (auth.authenticated) ?
    [{ to: '/wanderer/dash', text: 'My Trips', component: CTAButton }, { to: '/signout', text: 'Signout', component: CTAButton }] :
    [{ to: '/signin', text: 'Do something', component: CTAButton }];

  const navLinks = [{ to: '/faq', text: 'FAQ' },
    { to: '/inspiration_all_around_us', text: 'Get inspired' },
    { to: '/refer', text: 'Refer a friend' },
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
        footerColor="#3A3A3A"
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
