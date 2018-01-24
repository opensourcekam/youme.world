import gql from 'graphql-tag';

const mutation = gql`
mutation signIn($input: SigninInput!){
	token: signin(input: $input)
}
`;

export default mutation;

// {
// "input": {
//   "password": "VeganZebra1",
//   "email": "kamdroidR@me.com"
// }
// }
