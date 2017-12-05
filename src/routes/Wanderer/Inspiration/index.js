import React from 'react';
import { Flex, Box } from 'grid-styled';
import emojiFromText from 'emoji-from-text';
import styled from 'styled-components';
import InfoText from '../../../components/InfoText';
import TripCard from '../../../components/TripCard';

const getFlag = country => (emojiFromText(country)
  .filter(item => item.match.emoji.category === 'flags'))[0] || { match: { emoji: { char: '' } } };
const places = [
  {
    country: 'Spain',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Japan',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Thailand',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Mexico',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Indonesia',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Peru',
    image: 'https://picsum.photos/',
  },
  {
    country: 'South America',
    image: 'https://picsum.photos/',
  },
  {
    country: 'Egypt',
    image: 'https://picsum.photos/',
  },
];


const WandererInspiration = ({ data }) => (
  <Flex
    wrap
    mt="4.5rem"
    mx="1rem"
  >
    <Box w={[1]}>
      <InfoText>explore countries</InfoText>
      {places.map((place, i) => (
        <TripCard data={{
							to: `/inspiration/${place.country}`,
							locationName: place.country,
							backgroundImg: `${place.image}${400 + i}`,
							...place,
						}}
        />
		))}
    </Box>
  </Flex>
);

export default WandererInspiration;
