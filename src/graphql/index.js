import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

const ROOT_URL = 'http://youme-data-youme.b9ad.pro-us-east-1.openshiftapps.com/graphql';
const LOCAL_URL = 'http://localhost:8080/graphql';

export const optionsGraphQL = (data: Object) => ({
  method: 'post',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  mode: 'cors',
  body: JSON.stringify(data),
});

export const removeWhitespace = (query: string) => query.replace(/\s+/g, ' ');

const client = new ApolloClient({
  link: new HttpLink({ uri: ROOT_URL }),
  cache: new InMemoryCache(),
});


client.query({
  query: gql`query {hiddenGems { id }}`,
}).then(console.log);

export const nothing = () => {};

export default client;

