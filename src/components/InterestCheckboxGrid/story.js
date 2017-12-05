import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import InterestCheckboxGrid from './';
import InterestCard from '../InterestCard';

import nightLife from '../../interestImages/nightLife.jpg';
import outdoors from '../../interestImages/outdoors.jpg';
import vegan from '../../interestImages/vegan.jpg';
import touristy from '../../interestImages/touristy.jpg';

const data = [
  {
    image: nightLife,
    name: 'Nightlife',
  },
  {
    image: outdoors,
    name: 'Outdoors',
  },
  {
    image: vegan,
    name: 'Food 🍕🍺🍦',
  },
  {
    image: touristy,
    name: 'Touristy',
  },
];

const Wrapper = styled.main`
	display: inline-flex;
	height: 100%;

`;

storiesOf('InterestCheckboxGrid', module)
  .add('base', () =>
    (<InterestCheckboxGrid
      data={data}
    />),
  )
  .add('withInterestCard', () => (
    <Wrapper>
      <InterestCard
        header="What's your travel style?"
        mainText="Tell us what your travel style is like so we can find you the good stuff."
      />
      <InterestCheckboxGrid
        data={data}
      />
    </Wrapper>
  ));
