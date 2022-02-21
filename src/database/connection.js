import Knex from 'knex';
import Pg from 'pg';
import knexFile from '../../knexfile';

Pg.types.setTypeParser(20, 'text', parseInt);
Pg.types.setTypeParser(1700, 'text', parseInt);

const environment = process.env.NODE_ENV || 'development';
const knex = knexFile[environment];
const connection = Knex(knex);

if (process.env.ENABLE_SQL_LOG) {
  connection.on('query', query => {
    // eslint-disable-next-line no-console
    console.log({
      bindings: query.bindings,
      sql: query.sql
    });
    // eslint-disable-next-line no-console
    console.log('-----------------');
  });
}
export default connection;
