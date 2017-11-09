import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from '../Icon';

const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	outline: none;
	${({ disabled }) => disabled && 'opacity: 0.2;'}
	&:active {
		opacity: 0.5;
	}
`;

const IconButton = ({
  disabled, onClick, iconName, fill,
}) => (
  <Button disabled={disabled} onClick={onClick}>
    <Icon name={iconName} fill={fill} />
  </Button>
);

export default IconButton;
