import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import styled from 'styled-components';
import { Flex } from 'grid-styled';
import InterestCheckbox from '../InterestCheckbox';

// TODO: GET THIS GRID RIGHT
const Wrapper = styled(Flex).attrs({
  align: 'center',
  column: true,
})`
`;

const InterestCheckboxGrid = ({ data }) => (
  <Wrapper>
    {data && data.map(d => <InterestCheckbox name={d.name} image={d.image} value={d.name} />)}
  </Wrapper>
);

InterestCheckboxGrid.propTypes = {
  data: arrayOf(shape({
    image: string,
    name: string,
  })).isRequired,
};

InterestCheckboxGrid.defaultProps = {

};

export default InterestCheckboxGrid;
