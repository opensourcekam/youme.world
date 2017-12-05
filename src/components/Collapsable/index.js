import React from 'react';
import styled, { css } from 'styled-components';
import { func, bool, node, string } from 'prop-types';
import { withState } from 'recompose';
import { UnmountClosed } from 'react-collapse';
import { Button as Btn } from 'feuxworks';
import { presets } from 'react-motion';
import { Flex, Box } from 'grid-styled';
import Icon from '../Icon';

const closedStyle = css`
	border-bottom: solid;
	border-color: #3A3A3A;
`;
const openStyle = css`
	border-bottom: solid;
	border-color: #1CFF54;
`;
const upCaret = css`
	transform: rotate(-45deg);
	fill: #3A3A3A;
	stroke: #3A3A3A;
`;
const downCaret = css`
	transform: rotate(180deg);
	fill: #1CFF54;
	stroke: #1CFF54;
`;

const Button = styled(Btn)`
	${({ isOpened }) => ((isOpened) ? openStyle : closedStyle)};
	width: 100%;
	color: black;
	border-width: 5px;
	background-color: white;
	padding: 0;
	margin-bottom: 1rem;
	transition: border-bottom 400ms ease-in-out;
	transition: border-color 600ms ease-in-out;
`;

const Caret = styled(Icon)`
	${({ isOpened }) => ((!isOpened) ? upCaret : downCaret)};
	transition: transform 500ms ease-in-out;
`;

const Collapsable = ({
  children, header, toggleCollapsed,
  collapsed, HeaderComponent, ButtonComponent, ...props
}) => (
  <div>
    <ButtonComponent isOpened={collapsed} onClick={() => toggleCollapsed(!collapsed)}>
      <HeaderComponent>
        <Flex justify="space-between" align="center">
          {header}
          <Icon
            name="caretDown"
            stroke="#fff"
            fill="#fff"
            isOpened={collapsed}
          />
          <Caret
            name="caretDown"
            stroke="#3A3A3A"
            fill="#3A3A3A"
            isOpened={collapsed}
          />
        </Flex>
      </HeaderComponent>
    </ButtonComponent>
    <UnmountClosed
      {...props}
      isOpened={collapsed}
      springConfig={presets.noWobble}
      hasNestedCollapse
    >
      <Box px="0.5rem">
        {children}
      </Box>
    </UnmountClosed>
  </div>
);

Collapsable.propTypes = {
  header: string.isRequired,
  collapsed: bool.isRequired,
  children: node.isRequired,
  toggleCollapsed: func.isRequired,
  HeaderComponent: node,
  ButtonComponent: node,
};

Collapsable.defaultProps = {
  HeaderComponent: styled.h4`
		font-weight: 100;

	`,
  ButtonComponent: Button,
};


export default withState('collapsed', 'toggleCollapsed', false)(Collapsable);
