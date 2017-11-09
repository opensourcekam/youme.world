import React from 'react';
import { withProps, compose } from 'recompose';
import { Wizard } from 'feuxworks';
import Page1 from './page1';
import Page2 from './page2';

const FORM_NAME = 'Your taste';

const pages = [
  { name: 'Headed to', step: 'where to', component: Page1 },
  { name: 'Morning vibes', step: 'morning', component: Page2 },
];

const FirstTimeUserForm = () => (
  <Wizard
    form={FORM_NAME}
    onSubmit={props => console.log(props)}
    pages={pages}
  />
);


export default FirstTimeUserForm;
