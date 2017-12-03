import React from 'react';
import { storiesOf } from '@storybook/react';
import TripDates from './';

storiesOf('TripDates', module)
	.add('base', () =>
		<TripDates>Component</TripDates>
	);
