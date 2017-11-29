import React from 'react';
import { Flex, Box } from 'grid-styled';
import styled from 'styled-components';

const ContentWrap = styled(Flex).attrs({
  justify: 'center',
  align: 'center',
})`
	height: 90vh;
	text-align: center;
`;

const H1 = styled.h1`
  color: red;
  font-family: arial;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Notfound = () =>
  (
    <ContentWrap mt="4.5rem">
      <Box>
        <H1>404</H1>
        <h3>Plan not found</h3>
      </Box>
    </ContentWrap>
  );

export default Notfound;
