import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const CreateMutation = gql`
	mutation createTrip($input: TripInput!) {	
			createTrip(input: $input) {
				tripId
				title
				place
				start
				end
		}
	}
`;

const FetchTrips = gql`
query tripsByWandererId($WandererId: ID!) {
	trips: tripsByWandererId(WandererId: $WandererId) {
		id: tripId
		status
		place
		start
		end
		photos
		longName
		country
		coordinates {
			lat
			lng
		}
	}
}
`;

export const createTrip = graphql(CreateMutation, {
  props: ({ mutate }) => ({
    createTrip: (input) => {
      const newTripInput = {
        ...input,
        start: input.dates.startDate,
        end: input.dates.endDate,
      };
      delete newTripInput.dates;
      return (mutate({
        variables: {
          input: newTripInput,
        },
        refetchQueries: [{ query: FetchTrips, variables: { WandererId: input.WandererId } }],
      }));
    },
  }),
});
