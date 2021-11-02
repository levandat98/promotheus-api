import { gender } from '../../constants/common';
import roles from '../../constants/roles';

export const up = async knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('email').unique();
    table.string('password');
    table.enu('role', [...Object.values(roles)]);
    table.enu('gender', [...Object.values(gender)]);
    table.string('name');
    table.date('age');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('users');
