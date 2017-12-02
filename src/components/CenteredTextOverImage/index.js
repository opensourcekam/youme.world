import React from 'react';
import styled from 'styled-components';
import { string, node } from 'prop-types';

const Wrapper = styled.div`
    position: relative;
    display: table;
    height: 400px;
		min-width: 100%;
    background: ${({ src }) => `url(${src}) no-repeat top center`};
		background-size: cover;
		
		&:before {
			content: '';
			position: absolute;
			top: 0;
			right: 0;
			bottom: 0;
			left: 0;
			background-image: ${({ color, alternativeColor, backgroundColor }) => `linear-gradient(to top right, ${alternativeColor}, ${backgroundColor})`};
			opacity: .6; 
		}

`;
const Overlay = styled.div`
    display: table-cell;
    vertical-align: middle;
`;

const CenteredText = styled.div`
    text-align: center;
		max-width: 100%;		
    color: white;
		font-family: 'Rustico', 'Finger Paint', cursive;
    font-size: 205%;
    font-weight: lighter;
    line-height: 2;
		padding: 0 10%;
		filter: brightness(105%);
`;

const CenteredTextOverImage = ({
  children, src, backgroundColor,
  color, alternativeColor,
}) => (
  <Wrapper
    src={src}
    backgroundColor={backgroundColor}
    color={color}
    alternativeColor={alternativeColor}
  >
    <Overlay>
      <CenteredText>
        {children}
      </CenteredText>
    </Overlay>
  </Wrapper>
);

CenteredTextOverImage.propTypes = {
  children: node.isRequired,
  src: string.isRequired,
};

export default CenteredTextOverImage;
