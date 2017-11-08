import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { SignupForm } from 'feuxworks';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { compose } from 'recompose';
import mapImg from '../../images/planningOnMap.jpg';
import { signup } from '../../redux/actions/auth';

const enhance = compose(connect(null, dispatch => ({
  doTheSignup: ({ email, password, ...rest }) =>
    dispatch(signup({ email, password, rest })),
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


const SignUp = ({ doTheSignup, errorText }) => (
  <Container>
    <Fade down delay={800}>
      <Wrapper>
        <SignupForm onSubmit={values => doTheSignup(values)} />
        <Error>{errorText}</Error>
      </Wrapper>
    </Fade>
  </Container>
);

SignUp.propTypes = {
  doTheSignup: PropTypes.func.isRequired,
  errorText: PropTypes.string.isRequired,
};
SignUp.defaultProps = {};

export default enhance(SignUp);
