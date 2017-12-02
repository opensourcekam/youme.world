import React from 'react';
import { storiesOf } from '@storybook/react';
import TodoList from './';

storiesOf('TodoList', module)
	.add('base', () =>
		<TodoList>Component</TodoList>
	);
