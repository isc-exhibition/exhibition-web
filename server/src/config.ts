import * as data from './secret.json';

const { NODE_ENV } = process.env;

export const getMongoURI = () => {
  if (NODE_ENV === 'development') {
    return 'mongodb://localhost';
  } else if (NODE_ENV === 'production') {
    return data.mongoURI;
  } else if (NODE_ENV === 'test') {
    return 'mongodb://localhost';
  } else {
    return 'mongodb://localhostiscexhibition';
  }
};

export const database = data.database;
