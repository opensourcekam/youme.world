import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const FetchTrip = gql`
	query tripsByWandererId($tripId: ID!) {
		trip: tripById(tripId: $tripId) {
			WandererId
			tripId
			title
			budget
			status
			longName
			place
			photos
			start
			end
			place
			country
			coordinates {
				lat
				lng
			}
		}
	}
`;


export default compose(graphql(FetchTrip, {
  props: ({ data: { loading, trip, ...rest } }) => (loading ? { loading } : { trip, loading, rest }),
  options: ({ match }) => ({ variables: { tripId: match.params.tripId } }),
}));
