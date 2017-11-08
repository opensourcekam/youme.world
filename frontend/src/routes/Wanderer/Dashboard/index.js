/* global fetch localStorage */
import React from 'react';
import { ContentContainer, SideBar } from 'feuxworks';
import { lifecycle, compose, mapProps } from 'recompose';
import styled from 'styled-components';

const Wrapper = styled.main`
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 1rem;
  grid-auto-flow: dense; */
  height: 100vh;

`;
const Box = styled.main`
  grid-row: span 2;
  grid-column: span 2;
  background-color: #777;
  padding: 1rem;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    max-height: 100%;
  }
`;

const enhance = compose(lifecycle({
  state: {
    data: {
      message: '',
    },
  },
  componentWillMount() {
    fetch('http://localhost:3003', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('token'),
      },
    }).then((res) => {
      res
        .json()
        .then((json) => {
          this.setState({ data: json });
        });
    });
  },
}));

const VisitorDashboard = props => (
  <Wrapper>
    <SideBar>
      <ContentContainer>
        <Box>
          <img src="//unsplash.it/1600/500/?random" alt="img" />
          <h3>并温听袋由却。</h3>
        </Box>
        <Box>
          <img src="//unsplash.it/1601/500/?random" alt="img" />
          <h3>形端宝帝！室确归整落教拉？</h3>
        </Box>
        <Box><h3>并温听袋由却</h3>
          <img src="//unsplash.it/1300/500/?random" alt="img" />
        </Box>
        <Box>
          <h3>并温听袋由却</h3>
          <img src="//unsplash.it/1301/500/?random" alt="img" />
        </Box>
        <Box>
          <img src="//unsplash.it/1800/500/?random" alt="img" />
          <span>并温听袋</span>
        </Box>
        <Box>
          <img src="//unsplash.it/1801/500/?random" alt="img" />
          <span>并温听袋</span>
        </Box>
      </ContentContainer>
    </SideBar>
  </Wrapper>
);

export default enhance(VisitorDashboard);
