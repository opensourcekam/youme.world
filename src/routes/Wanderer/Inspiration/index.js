import React from 'react';
import { Flex, Box } from 'grid-styled';
import { 
	Banner,
} from 'feuxworks';
import styled from 'styled-components';
import TEMPIMG from '../../../images/outdoors.jpg';

const StyledBanner = styled(Banner)`
	background-size: cover;
	background-repeat: no-repeat;
	height: 500px;
`;

const WandererInspiration = ({ data }) => (
	<Flex flex="1 1 100%" column pt="4.5rem">
      <StyledBanner
				background={`#123093 url(${TEMPIMG})`}
				height="400px"
			/>
			<Flex m="1rem">
				<span>"Inspire them to travel to the unknown and they will travel to the unknown."</span>
			</Flex>
	</Flex>
);

export default WandererInspiration;