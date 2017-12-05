import React from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'feuxworks';
import styled, { keyframes } from 'styled-components';
import createModalRoot from '../../hocs/createModalRoot';

const fadeIn = keyframes`
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
`;

const Wrapper = Card.extend`
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100vw;
	background-color: rgba(255,255,255,0.95);
	position: fixed;
	z-index: 10;
	animation: ${fadeIn} 200ms ease-in-out;
`;

const ChildrenWrapper = styled.div`
	padding: 2rem 1rem;
`;

const CloseButton = Button.extend`
	position: absolute;
	top: 0;
	right: 2rem;
	margin: 1em;
	z-index: 10;
`;

const Modal = ({ children, onClose, rootEl }) => createPortal(
  <Wrapper>
    <CloseButton onClick={onClose}>X</CloseButton>
    <ChildrenWrapper>
      {children}
    </ChildrenWrapper>
  </Wrapper>,
  rootEl,
);

const { func, element, bool } = PropTypes;

Modal.propTypes = {
  onClose: func.isRequired,
  children: element.isRequired,
  isOpen: bool.isRequired,
};

export default createModalRoot(Modal);
