import React from 'react';
import { storiesOf } from '@storybook/react';
import TripCard from './';

storiesOf('TripCard', module)
	.add('base', () =>
		<TripCard>Component</TripCard>
	);
