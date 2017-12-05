import React from 'react';
import { storiesOf } from '@storybook/react';
import Collapsable from './';

storiesOf('Collapsable', module)
	.add('base', () =>
		<Collapsable>Component</Collapsable>
	);
