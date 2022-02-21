import roles from '../../constants/roles';
import { gender } from '../../constants/common';

export const up = async knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary();
    table.string('email').unique();
    table.string('password');
    table.enu('role', [...Object.values(roles)]);
    table.string('bio', 3000);
    table.string('fullName');
    table.text('avatar');
    table.string('location');
    table.enu('gender', [...Object.values(gender)]);
    table.timestamp('birthDay');
    table.string('phoneNumber').unique();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('users');
