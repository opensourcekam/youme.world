import React from 'react';
import PropTypes from 'prop-types';
import { Map, ContentContainer, TextInput, WizardPage } from 'feuxworks';
import styled from 'styled-components';

const Container = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const MapWrap = styled.div`
	min-width: 100%;
`;


const Page1 = props => (
  <Container>
    <WizardPage {...props}>
      <label>
        <h3>Where are you headed? ✈️🌏</h3>
        <div>
          <TextInput name="going-to" component="input" placeholder="NYC, NY" />
        </div>
      </label>
    </WizardPage>
  </Container>
);

export default Page1;
