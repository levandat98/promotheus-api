export const up = async knex =>
  knex.schema.createTable('genres', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('description');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('genres');
