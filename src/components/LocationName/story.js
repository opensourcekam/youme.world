import React from 'react';
import { storiesOf } from '@storybook/react';
import LocationName from './';

storiesOf('LocationName', module)
	.add('base', () =>
		<LocationName>Component</LocationName>
	);
