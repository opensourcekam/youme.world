import React from 'react';
import { storiesOf } from '@storybook/react';
import ScrollToTop from './';

storiesOf('ScrollToTop', module)
	.add('base', () =>
		<ScrollToTop>Component</ScrollToTop>
	);
