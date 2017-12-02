import React from 'react';
import { Flex, Box } from 'grid-styled';
import {
  Banner,
} from 'feuxworks';
import styled from 'styled-components';
import TEMPIMG from '../../../images/outdoors.jpg';

const StyledBanner = styled(Banner)`
	background-size: cover;
	background-repeat: no-repeat;
	height: 500px;
`;

const WandererInspiration = ({ data }) => (
  <Flex
    flex="1 1 100%"
    pt="8.5rem"
    pb="4.5rem"
    wrap
    justify="center"
    align="center"
  >
    {Array(8).fill(null).map(() => (
      <Flex
        px="1rem"
        mx="0.5rem"
        py="1rem"
        my="1rem"
        w={[1, 1 / 5]}
        justify="center"
        align="center"
      >
        <p>Tokyo, Japan</p>
      </Flex>
		))}
  </Flex>
);

export default WandererInspiration;
