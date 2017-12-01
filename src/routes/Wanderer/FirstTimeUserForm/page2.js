import React from 'react';
// import PropTypes from 'prop-types';
import { ContentContainer, CardArraySelect, WizardPage } from 'feuxworks';
import styled from 'styled-components';

const Container = styled(ContentContainer)`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-bottom: 4rem;
`;

const Label = styled.label``;

const Page2 = props => (
  <Container>
    <WizardPage {...props}>
      <Label>
        <h3>How do you start your day?</h3>
        <CardArraySelect
          name="morning-vibes"
          data={[{ value: 'Chill 😴 🛌' }, { value: 'Seneic 🌅🌄' }, { value: 'Breakfast ☕️🍳' }, { value: 'Excercise 🚶‍♀️' }, { value: 'Pampered 💆🕴' }, { value: 'Adventure time 👩‍🎤🤸‍' }]}
        />
      </Label>
      <Label>
        <h3>How do you end your day?</h3>
        <CardArraySelect
          name="night-vibes"
          data={[{ value: 'Chill 😴 🛌' }, { value: 'Seneic 🌅🌄' }, { value: 'Breakfast ☕️🍳' }, { value: 'Excercise 🚶‍♀️' }, { value: 'Pampered 💆🕴' }, { value: 'Adventure time 👩‍🎤🤸‍' }]}
        />
      </Label>
    </WizardPage>
  </Container>
);

export default Page2;
