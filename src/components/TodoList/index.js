import React from 'react';
import PropTypes from 'prop-types';
import InterestCheckboxGrid from '../InterestCheckboxGrid';
import Collapsable from '../Collapsable';

const TodoList = props => (
  <Collapsable>
    <InterestCheckboxGrid data={
			[
				{
					image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=200',
					name: 'Hotel',
				},
				{
					image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=200',
					name: 'Flight',
				},
				{
					image: 'https://images.unsplash.com/photo-1498661705887-3778d9ecb4ff?auto=format&fit=crop&w=200',
					name: 'Phone',
				},
				{
					image: 'https://images.unsplash.com/photo-1473163928189-364b2c4e1135?auto=format&fit=crop&w=200',
					name: 'Passport',
				},
				{
					image: 'https://images.unsplash.com/photo-1486574655068-162e94137442?auto=format&fit=crop&w=200',
					name: 'Camera',
				},
				{
					image: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?auto=format&fit=crop&w=200',
					name: 'Good Attitude',
				},
			]
		}
    />
  </Collapsable>
);

TodoList.propTypes = {};
TodoList.defaultProps = {};

export default TodoList;
