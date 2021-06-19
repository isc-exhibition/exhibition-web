import { ApolloClient, InMemoryCache } from '@apollo/client';

const { NODE_ENV } = process.env;

const getApolloClient = () => {
  let apolloClient = null;

  if (NODE_ENV === 'development') {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
      credentials: 'include',
    });
  } else if (NODE_ENV === 'production') {
    apolloClient = new ApolloClient({
      uri: 'https://api.iscexhibition.com/graphql',
      cache: new InMemoryCache(),
      credentials: 'include',
    });
  } else if (NODE_ENV === 'test') {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
      credentials: 'include',
    });
  } else {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
      credentials: 'include',
    });
  }

  return apolloClient;
};

export default getApolloClient;

export const getRestApiEndpoint = () => {
  if (NODE_ENV === 'production') {
    return 'https://api.iscexhibition.com/';
  }
  return 'http://localhost:3000';
};
