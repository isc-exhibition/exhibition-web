import { ApolloClient, InMemoryCache } from '@apollo/client';

const { NODE_ENV } = process.env;

const getApolloClient = () => {
  let apolloClient = null;

  if (NODE_ENV === 'development') {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
    });
  } else if (NODE_ENV === 'production') {
    apolloClient = new ApolloClient({
      uri: 'https://api.iscexhibition.com/graphql',
      cache: new InMemoryCache(),
    });
  } else if (NODE_ENV === 'test') {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
    });
  } else {
    apolloClient = new ApolloClient({
      uri: 'http://localhost:3000/graphql',
      cache: new InMemoryCache(),
    });
  }

  return apolloClient;
};

export default getApolloClient;
