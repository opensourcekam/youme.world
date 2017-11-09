import React from 'react';
import PropTypes from 'prop-types';
import { ContentContainer, Foundation, Nav, Footer, CTAButton } from 'feuxworks';

const footerAboutLinks = [{ to: '/who_are_we', text: 'Who are we?' }, { to: '/jobs', text: 'Become an advisor' }, { to: '/Privacy policy', text: 'Our policies' }, { to: '/terms', text: 'Terms' }];
const Layout = ({ children, authenticated, ...props }) => {
  const buttonLink = (authenticated) ? { to: '/traveler/dashboard', text: 'Do something', component: CTAButton } : { to: '/signin', text: 'Do something', component: CTAButton };

  const navLinks = [{ to: '/faq', text: 'FAQ' },
    { to: '/pricing', text: 'Pricing' },
    { to: '/inspiration_all_around_us', text: 'Get inspired' },
    { to: '/refer', text: 'Refer a friend' },
    buttonLink,
  ];
  return (
    <Foundation>
      <Nav
        fixed
        links={navLinks}
      />
      <ContentContainer>
        {children}
      </ContentContainer>
      <Footer
        aboutLinks={footerAboutLinks}
        footerColor="linear-gradient(to left, #b2fefa, #0ed2f7)"
      />
    </Foundation>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  authenticated: PropTypes.bool.isRequired,
};

export default Layout;
