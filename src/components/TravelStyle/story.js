import React from 'react';
import { storiesOf } from '@storybook/react';
import TravelStyle from './';

storiesOf('TravelStyle', module)
	.add('base', () =>
		<TravelStyle>Component</TravelStyle>
	);
