import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { graphql } from 'react-apollo';
import { SigninForm } from 'feuxworks';
import { Fade } from 'react-reveal';
import styled from 'styled-components';
import { compose, withProps } from 'recompose';
import mapImg from '../../images/planningOnMap.jpg';
import { signin } from '../../redux/actions/auth';
import mutation from './gql';

const enhance = compose(
  graphql(mutation),
  connect(state => ({
    errorText: state.auth.error.text,
  }), dispatch => ({
    storeAuth: data => dispatch(signin(data)),
  })),
  withProps(({ mutate, storeAuth }) => ({
    getJwt: ({ email, password }) => {
      mutate({
        variables: {
          input: {
            password,
            email,
          },
        },
      }).then(({ data }) => {
        // set page loading
        console.log('got data', data);
        // call redux
        storeAuth(data);
      }).catch((error, ...rest) => {
		  // set errors
        console.log('there was an error sending the query', error, rest);
      });
    },
  })),
);

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

const SignIn = ({
  errorText, getJwt, ...rest
}) => console.log('...rest', rest) || (
  <Container>
    <Fade up delay={800}>
      <Wrapper>
        <SigninForm onSubmit={values => getJwt(values)} />
        {/* {getJwtLoading && <span>LOADING...</span>} */}
        <Error>{errorText}</Error>
      </Wrapper>
    </Fade>
  </Container>
);

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired,
  errorText: PropTypes.string,
  mutateLoading: PropTypes.bool.isRequired,
};

SignIn.defaultProps = {
  errorText: '',
};

export default enhance(SignIn);
