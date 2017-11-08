import { css } from 'styled-components';

const VerticalLineAfter = css`
	position: relative;
	&:after {
		content: '';
		display: block;
		position: absolute;
		bottom: -3.5em;
		height: 3em;
		left: calc(50% - 1px);
		width: 2px;
		background: rgba(86,70,71,.2);
	}`;

export default VerticalLineAfter;
