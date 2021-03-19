import * as data from './secret.json';

const { NODE_ENV } = process.env;

export const getMongoURI = () => {
  const localURI = 'mongodb://localhost';

  if (NODE_ENV === 'development') {
    return localURI;
  } else if (NODE_ENV === 'production') {
    return data.mongoURI;
  } else if (NODE_ENV === 'test') {
    return localURI;
  } else {
    return localURI;
  }
};

export const database = data.database;
