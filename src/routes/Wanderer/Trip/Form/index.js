import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { withState } from 'recompose';
import { reduxForm } from 'redux-form';
import styled from 'styled-components';
import { Flex, Box } from 'grid-styled';

import { 
	Banner,
	Map,
	MapCard
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
const enhance = withState('geometry', 'onSelectPlace', {
  lat: 59.938043,
  lng: 30.337157,
});

const NewTripForm = ({ geometry, onSelectPlace}) => (	
	<Flex flex="1 1 100%" column pt="4.5rem">
		<Box>
				<MapCard
            name="location"
            placeholder="Where to next?"
            onPlacesChanged={place => onSelectPlace({
							lat: get(place, '[0].geometry.location.lat')(),
              lng: get(place, '[0].geometry.location.lng')(),
            })}
            geometry={geometry}
            zoom={10}
						/>
			</Box>
	</Flex>
);

export default reduxForm({
  form: 'new-trip',
})(enhance(NewTripForm));