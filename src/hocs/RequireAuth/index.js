/* eslint-disable */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { func, bool, shape } from 'prop-types';

export default function (ComposedComponent) {
  return connect(state => state, dispatch => ({
    gotoSignin: () => {
      dispatch(push('/signin'));
    },
  }))(class extends Component {

				static propTypes = {
					auth: shape({
						authenticated: bool,
					}).isRequired,
					gotoSignin: func.isRequired,
				}

				componentWillMount() {
					const { auth: { authenticated } } = this.props;
					if (!authenticated) {
						this.props.gotoSignin();
					}
				}

				render() {
					return (
						<ComposedComponent {...this.props} />
					);
				}

		}
)};

