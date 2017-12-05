import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
	* {
		min-height: 0;
		min-width: 0;
	}
`;

const settings = {
  className: 'center',
  infinite: true,
  swipeToSlide: true,
};

const SwipeSlider = ({ children }) => (
  <StyledSlider {...settings}>
    {children}
  </StyledSlider>
);

export default SwipeSlider;

