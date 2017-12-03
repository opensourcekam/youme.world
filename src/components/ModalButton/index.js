import React from 'react';
import { element, node, bool, func, string } from 'prop-types';
import { withState, compose } from 'recompose';
import { Button } from 'feuxworks';
import styled from 'styled-components';
import Modal from '../Modal';

const Wrapper = styled.div`
	display: inline-block;
`;

const enhance = compose(withState('isOpen', 'closeModal', false));

const ModalButton = ({
  OuterModal, InnerModal, children, isOpen, closeModal, ...props
}) => (
  <Wrapper>
    <Button
      onClick={() => {
				closeModal(true);
			}}
      {...props}
    >
      {children}
    </Button>
    {isOpen &&
    <OuterModal isOpen={isOpen} onClose={() => closeModal(false)}>
      {InnerModal}
    </OuterModal>}
  </Wrapper>
);

ModalButton.propTypes = {
  className: string,
  OuterModal: func.isRequired,
  InnerModal: element.isRequired,
  children: node.isRequired,
  isOpen: bool.isRequired,
  closeModal: func.isRequired,
};

ModalButton.defaultProps = {
  OuterModal: Modal,
  InnerModal: <div />,
};

export default enhance(ModalButton);
