import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default function (ComposedComponent) {
	class Authenticated extends Component {
		static contextTypes = {
			router: PropTypes.object,
		}

		componentWillMount = () => {
			if (!this.props.auth.authenticated) {
				
			}
		}
		
    render() {
      return (
        <ComposedComponent {...this.props} />
      );
    }
  }
}

