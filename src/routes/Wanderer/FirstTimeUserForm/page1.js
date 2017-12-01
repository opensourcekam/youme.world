import React from 'react';
// import PropTypes from 'prop-types';
import { ContentContainer, TextInput, WizardPage, Emoji } from 'feuxworks';
import styled from 'styled-components';

const Container = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Label = styled.label`
	min-width: 100%;
`;


const Page1 = props => (
  <Container>
    <WizardPage {...props}>
      <Label>
        <h3>Where are you headed? <Emoji icon="✈️🌏" /></h3>
        <div>
          <TextInput name="going-to" component="input" placeholder="NYC, NY" />
        </div>
      </Label>
    </WizardPage>
  </Container>
);

export default Page1;
