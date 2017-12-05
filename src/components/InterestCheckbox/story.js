import React from 'react';
import { storiesOf } from '@storybook/react';
import InterestCheckbox from './';
import photos from '../../interestImages/touristy.jpg';

const array = [
  {
    image: photos,
    name: 'Photography',
  },
];

storiesOf('InterestCheckbox', module)
  .add('base', () =>
    (<InterestCheckbox
      image={array[0].image}
      name={array[0].name}
    />),
  );
