import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from 'grid-styled';
import styled from 'styled-components';
import coolLoader from '../../images/wierdLoader.webp';

const Wrap = styled(Flex).attrs({
  mt: '4.5rem',
})`
	display: flex;
	justify-content: center;
`;

const LoadingScreen = props => (
  <Wrap>
    <img src={coolLoader} alt="LOADING" />
  </Wrap>
);

LoadingScreen.propTypes = {};
LoadingScreen.defaultProps = {};

export default LoadingScreen;
