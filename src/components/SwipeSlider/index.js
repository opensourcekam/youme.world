import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const StyledSlider = styled(Slider)`
	* {
		min-height: 0;
		min-width: 0;
	}
`;

const SwipeSlider = ({ settings, children, ...props }) => (
  <StyledSlider {...props} {...settings}>
    {children}
  </StyledSlider>
);

SwipeSlider.defaultProps = {
  settings: {
    className: 'center',
    infinite: true,
    swipeToSlide: true,
  },
};

export default SwipeSlider;

