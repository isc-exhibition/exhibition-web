/* eslint-disable @typescript-eslint/no-var-requires */
import * as AWS from 'aws-sdk';

const { NODE_ENV } = process.env;

const region = 'ap-northeast-2';
const secretName = 'prod/api/mongo';

const localURI = 'mongodb://localhost';

const client = new AWS.SecretsManager({
  region: region,
});

export const getSecretData = async () => {
  let mongoURI = '';
  let database = '';
  let jwtSecretKey = '';

  const secret = await client
    .getSecretValue({ SecretId: secretName })
    .promise();

  if ('SecretString' in secret) {
    const secretObject = JSON.parse(secret.SecretString);

    if (NODE_ENV === 'development') {
      mongoURI = localURI;
    } else if (NODE_ENV === 'production') {
      mongoURI = secretObject.mongoURI;
    } else if (NODE_ENV === 'test') {
      mongoURI = localURI;
    } else {
      mongoURI = localURI;
    }

    database = secretObject.database;
    jwtSecretKey = secretObject.jwtSecretKey;
  } else {
    throw 'SecretString not found';
  }

  return { mongoURI, database, jwtSecretKey };
};

export const getJwtSecretKey = async () => (await getSecretData()).jwtSecretKey;

const { jwtSecretKey } = process.env;

require('dotenv').config();
