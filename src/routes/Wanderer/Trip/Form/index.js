import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';
import { 
	Banner,
	Map,
	InputCard,
} from 'feuxworks';

const StyledBanner = styled(Banner)`
	background-size: cover;
	background-repeat: no-repeat;
	height: 500px;
`;

// startOfTrip
// endOfTrip
// location
// coordinates
// budget

const NewTripForm = props => (	
	<Flex flex="1 1 100%" column pt="4.5rem">
			<StyledBanner
				background={`#123093 url(http://unsplash.it/1400/?random)`}
				height="400px"
			/>
			<Flex m="1rem" justify="space-between">
				<span>"Where are we going this time?"</span>
				<InputCard name="location" placeholder="Where to next?" Inner={<Map />} />
				{/* <InputCard name="location" placeholder="Where to next?" Inner={<Map />} />
				<InputCard name="location" placeholder="Where to next?" Inner={<Map />} />
				<InputCard name="location" placeholder="Where to next?" Inner={<Map />} /> */}
			</Flex>
	</Flex>
);

export default NewTripForm;