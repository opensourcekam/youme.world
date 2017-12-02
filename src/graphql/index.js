import { ApolloClient } from 'apollo-client-preset';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

const ROOT_URL = '//youme-data-youme.b9ad.pro-us-east-1.openshiftapps.com/graphql';
// const ROOT_URL = 'http://localhost:8080/graphql';

const client = new ApolloClient({
  link: new HttpLink({ uri: ROOT_URL }),
  cache: new InMemoryCache(),
});

client.query({
  query: gql`{ wanderers { id } }`,
}).then(() => {
  console.log(`
		GQL CONNECTION IS OK:
	`);
})
  .catch(console.error);


export default client;

