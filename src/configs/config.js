import dotenv from 'dotenv';

dotenv.config();

const config = {
  server: {
    host: '0.0.0.0',
    port: 3000,
    jwtSecret: 'base-api',
    jwtExpiration: '1h'
  },
  bcrypt: {
    saltRounds: 5
  }
};

const developmentConfig = Object.assign(config, {
  database: {
    connectionString: process.env.DATABASE_URL_DEV,
    mongoDBConnectionString: process.env.MONGODB_URL_DEV
  }
});

const testingConfig = Object.assign(config, {
  server: {
    host: '0.0.0.0',
    port: 4000,
    jwtSecret: 'base-test',
    jwtExpiration: '1h'
  }
});

export default {
  developmentConfig,
  testingConfig
};
