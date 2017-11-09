import React from 'react';
import { lifecycle, compose } from 'recompose';
import { connect } from 'react-redux';
import { signout } from '../../redux/actions/auth';

const enhance = compose(
  connect(state => ({
    authenticated: state.auth,
  }), dispatch => ({
    doTheSignout: () =>
      dispatch(signout()),
  })),
  lifecycle({
    componentWillMount() {
      this.props.doTheSignout();
    },
  }),
);

const SignOut = enhance(props => (
  <pre>
    {JSON.stringify(props, null, 3)}
  </pre>
));

SignOut.propTypes = {

};

export default SignOut;
