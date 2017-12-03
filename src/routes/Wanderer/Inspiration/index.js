import React from 'react';
import { Flex, Box } from 'grid-styled';
import {
  Banner,
} from 'feuxworks';
import emojiFromText from 'emoji-from-text';
import styled from 'styled-components';
import InfoText from '../../../components/InfoText';

const getFlag = country => (emojiFromText(country)
  .filter(item => item.match.emoji.category === 'flags'))[0] || { match: { emoji: { char: '' } } };
const places = [
  {
    country: 'Spain',
  },
  {
    country: 'Japan',
  },
  {
    country: 'Thailand',
  },
  {
    country: 'Mexico',
  },
  {
    country: 'Indonesia',
  },
  {
    country: 'Peru',
  },
  {
    country: 'South America',
  },
  {
    country: 'Egypt',
  },
];

const WandererInspiration = ({ data }) => (
  <Flex
    wrap
    mt="4.5rem"
    flex="1 1 100%"
    ml="1rem"
    mr="1rem"
    justify="space-around"
  >
    <Box w={[1]}>
      <InfoText>explore countries</InfoText>
      {places.map(({ country }) => (
        <Flex
          px="1rem"
          mx="0.5rem"
          py="1rem"
          my="1rem"
          w={[1, 1 / 5]}
          justify="center"
          align="center"
        >
          <p>{country}</p>
          <p>{getFlag(country).match.emoji.char}</p>
        </Flex>
		))}
    </Box>
  </Flex>
);

export default WandererInspiration;
