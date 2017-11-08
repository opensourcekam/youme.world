import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SigninForm } from 'feuxworks';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { compose } from 'recompose';
import mapImg from '../../images/planningOnMap.jpg';
import { signin } from '../../redux/actions/auth';

const enhance = compose(connect(state => ({
  errorText: state.auth.error.text || '',
}), dispatch => ({
  doTheSignin: ({ email, password, ...rest }) =>
    dispatch(signin({ email, password, rest })),
})));

const Container = styled.main`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	background: #eee url(${mapImg});
	background-size: cover;
`;

const Wrapper = styled.div`
  position: relative;
  background-color: rgba(0, 0, 0, .9);
  color: white;
  display: flex;
  padding: 3rem;
  border-radius: 5%;
`;

const Error = styled.span`
	position: absolute;
	top: 10px;
	font-weight: bold;
	color: red;
`;

const SignIn = ({ doTheSignin, errorText }) => (
  <Container>
    <Fade up delay={800}>
      <Wrapper>
        <SigninForm onSubmit={values => doTheSignin(values)} />
        <Error>{errorText}</Error>
      </Wrapper>
    </Fade>
  </Container>
);

SignIn.propTypes = {
  doTheSignin: PropTypes.func.isRequired,
  errorText: PropTypes.string,
};

SignIn.defaultProps = {
  errorText: '',
};

export default enhance(SignIn);
