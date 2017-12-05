import React from 'react';
import { storiesOf } from '@storybook/react';
import LoadingScreen from './';

storiesOf('LoadingScreen', module)
	.add('base', () =>
		<LoadingScreen>Component</LoadingScreen>
	);
