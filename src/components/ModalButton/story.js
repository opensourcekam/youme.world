import React from 'react';
import { storiesOf } from '@storybook/react';
import ModalButton from './';

storiesOf('ModalButton', module)
	.add('base', () =>
		<ModalButton>Component</ModalButton>
	);
