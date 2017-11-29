import React from 'react';
import PropTypes from 'prop-types';

const NewTripForm = props => (
  <pre style={{ marginTop: '4.5rem' }}>
    {JSON.stringify(props, null, 3)}
  </pre>
);

export default NewTripForm;
