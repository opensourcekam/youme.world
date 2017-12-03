import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'feuxworks';
import Modal from '../Modal';
import ModalButton from '../ModalButton';


const SaveForTrip = props => (
  <div>
    <p>1. Enter amout you want to save</p>
    <TextInput />
    <p>2. Show a few schedules for saving</p>
    <p>3. Fake auto-saving feature</p>
  </div>
);

SaveForTrip.propTypes = {};
SaveForTrip.defaultProps = {};

export default SaveForTrip;
