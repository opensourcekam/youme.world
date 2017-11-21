import React, { Component } from 'react';
import { push } from 'react-router-redux';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
	class Authenticated extends Component {
		componentWillMount = () => {
			console.log('object');
			if (!this.props.auth.authenticated) {
				push('/signin');
			}
		}
		
    render() {
      return (
				<div>
					<ComposedComponent {...this.props} />					
				</div>
			);
    }
  }
}

