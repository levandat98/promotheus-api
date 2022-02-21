import { reactionType } from '../../constants/common';

export const up = async knex =>
  knex.schema.createTable('reactions', table => {
    table.increments('id').primary();
    table.enum('type', [...Object.values(reactionType)]);

    table.integer('userId');
    table
      .foreign('userId')
      .references('users.id')
      .onDelete('CASCADE');
    table.integer('episodeId');
    table
      .foreign('episodeId')
      .references('episodes.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
  });

export const down = async knex => knex.schema.dropTableIfExists('reactions');
