import { compose } from 'recompose';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

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


export default compose(graphql(FetchTrips, {
  props: ({ data: { loading, trips } }) =>
    (loading ? { loading } : { trips }),
  options: ({ WandererId }) =>
    ({ variables: { WandererId } }),
}));
