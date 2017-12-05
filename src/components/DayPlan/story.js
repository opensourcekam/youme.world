import React from 'react';
import { storiesOf } from '@storybook/react';
import DayPlan from './';

storiesOf('DayPlan', module)
	.add('base', () =>
		<DayPlan>Component</DayPlan>
	);
