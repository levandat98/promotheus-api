export const up = async knex =>
  knex.schema.createTable('genre_series', table => {
    table.increments('id').primary();
    table.integer('serieId');
    table
      .foreign('serieId')
      .references('series.id')
      .onDelete('CASCADE');
    table.integer('genreId');
    table
      .foreign('genreId')
      .references('genres.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('genre_series');
