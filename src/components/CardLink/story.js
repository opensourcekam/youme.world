import React from 'react';
import { storiesOf } from '@storybook/react';
import CardLink from './';

storiesOf('CardLink', module)
	.add('base', () =>
		<CardLink>Component</CardLink>
	);
