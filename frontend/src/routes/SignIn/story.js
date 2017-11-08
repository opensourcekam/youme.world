import React from 'react';
import { storiesOf } from '@storybook/react';
import Signup from './';

storiesOf('Signup', module)
	.add('base', () =>
		<Signup>Component</Signup>
	);
