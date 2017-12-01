import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const createTripMutation = gql`
	mutation createTrip($input: TripInput!) {	
			createTrip(input: $input) {
				tripId
				title
				place
				startOfTrip
				endOfTrip
		}
	}
`;

export const createTrip = graphql(createTripMutation, {
  props: ({ mutate }) => ({
    createTrip: input => (
      mutate({ variables: { input } })
    ),
  }),
});
