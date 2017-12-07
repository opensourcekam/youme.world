import React from 'react';
import { string, func, bool } from 'prop-types';
import styled from 'styled-components';
import { withState } from 'recompose';
import Icon from '../Icon';

const Label = styled.label`
	margin: 1rem;
	user-select: none;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	background-color: red;
	background: url(${({ image }) => image});
	background-size: cover;
	background-repeat: no-repeat;
	width: 120px;
	height: 120px;
	border-radius: 5px;
`;

const Input = styled.input`
	visibility: hidden;
`;

const Cover = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	
	border-radius: inherit;
	width: 100%;
	height: 100%;
	opacity: 1;
	transition: opacity 200ms ease-in-out;

	// background: ${({ isChecked }) => ((isChecked) ? 'linear-gradient(to bottom, rgba(28, 255, 84, 1), #0AFFF7)' : 'transparent')};
	
	background: ${({ isChecked }) => ((isChecked)
    ? 'rgba(28, 255, 84, 0.8)'
    : 'rgba(248, 98, 38, 0.7)')};
		
	transition: background 500ms cubic-bezier(0.02,-0.01, 0.55, 1.17);
`;

const Name = styled.span`
	position: absolute;
	top: 0;
	left: 0;
	font-size: 1.5rem;
	color: #FFF;
	padding: .5rem;	
`;
const Check = styled(Icon).attrs({
  strokeWidth: '0.1rem',

})`
	position: absolute;
	top: 0;
	margin: 50% auto;
	transform: translateY(-50%);
`;

const InterestCheckbox = ({
  image, name, isChecked, checkBox,
}) => (
  <Label image={image}>
    <Cover isChecked={isChecked}>
      <Name>{name}</Name>
      {isChecked && <Check name="check" size="3em" />}
      <Input
        type="checkbox"
        name={name}
        value={name}
        onClick={() => checkBox(!isChecked)}
      />
    </Cover>
  </Label>
);

InterestCheckbox.propTypes = {
  image: string.isRequired,
  name: string.isRequired,
  isChecked: bool.isRequired,
  checkBox: func.isRequired,
};
InterestCheckbox.defaultProps = {};

export default withState('isChecked', 'checkBox', false)(InterestCheckbox);
