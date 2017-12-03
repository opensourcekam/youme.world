import React from 'react';
import { storiesOf } from '@storybook/react';
import TotalTripTime from './';

storiesOf('TotalTripTime', module)
	.add('base', () =>
		<TotalTripTime>Component</TotalTripTime>
	);
