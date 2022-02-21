export const up = async knex =>
  knex.schema.createTable('episodes', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('description', 3000);
    table.timestamp('releaseDate');
    table.string('url');
    table.string('cover');
    table.string('img');
    table.integer('audioLength'); // unit = seconds
    table.string('source');
    table.integer('serieId');
    table
      .foreign('serieId')
      .references('series.id')
      .onDelete('CASCADE');
    table.integer('creatorId');
    table
      .foreign('creatorId')
      .references('users.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('episodes');
