import React from 'react';
import { Flex } from 'grid-styled';
import styled from 'styled-components';

const Scroll = Flex.extend`
	overflow: scroll;
`;

const ScrollFlex = ({ children }) => (
  <Scroll>
    {children}
  </Scroll>
);

ScrollFlex.propTypes = {};
ScrollFlex.defaultProps = {};

export default ScrollFlex;
