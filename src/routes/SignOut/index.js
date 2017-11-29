import React from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
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

const ContentWrap = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
})`
	height: 90vh;
	text-align: center;
`;

const H1 = styled.h1`
  color: red;
  font-family: arial;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const SignOut = () =>
  (
    <ContentWrap mt="4.5rem">
      <Box>
        <H1>See you soon! ✈️</H1>
      </Box>
    </ContentWrap>
  );

SignOut.propTypes = {

};

export default SignOut;
