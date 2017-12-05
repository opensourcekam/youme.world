import React from 'react';
import { storiesOf } from '@storybook/react';
import SwipeSlider from './';

storiesOf('SwipeSlider', module)
	.add('base', () =>
		<SwipeSlider>Component</SwipeSlider>
	);
