import React from 'react';
import { ContentContainer } from 'feuxworks';
import styled from 'styled-components';

const Wrapper = styled.main`
	height: 100vh;
	width: 100vw;
`;

/**
 * TODO:
 * [1]: Make the new gem redux form
 * [2]: Design this page
 * [3]: onSubmit of that form hit the graphql api to create new gem
 * [4]: rejoyce
 */

const CreateHiddenGem = props => 
	<ContentContainer>
		<Wrapper>
		</Wrapper>
	</ContentContainer>

export default enhance(CreateHiddenGem);
