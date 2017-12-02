import React from 'react';
import { storiesOf } from '@storybook/react';
import LongName from './';

storiesOf('LongName', module)
	.add('base', () =>
		<LongName>Component</LongName>
	);
