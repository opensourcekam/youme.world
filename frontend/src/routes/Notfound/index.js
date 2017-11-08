import React from 'react';
import { Card } from 'feuxworks';
import styled from 'styled-components';

const ContentWrap = styled(Card)`
  padding: 0 20rem;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
    <main>
      <ContentWrap>
        <H1>404</H1>
        <h3>Plan not found</h3>
      </ContentWrap>
    </main>
  );

export default Notfound;
