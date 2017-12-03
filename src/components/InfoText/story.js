import React from 'react';
import { storiesOf } from '@storybook/react';
import InfoText from './';

storiesOf('InfoText', module)
  .add('base', () =>
    <InfoText>Component</InfoText>);
