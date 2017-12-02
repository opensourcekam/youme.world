import React from 'react';
import { storiesOf } from '@storybook/react';
import CenteredTextOverImage from './';

storiesOf('CenteredTextOverImage', module)
	.add('base', () =>
		<CenteredTextOverImage>Component</CenteredTextOverImage>
	);
