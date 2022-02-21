export const up = async knex =>
  knex.schema.createTable('comments', table => {
    table.increments('id').primary();
    table.string('content', 10000);
    table.integer('dislike');
    table.integer('like');
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

export const down = async knex => knex.schema.dropTableIfExists('comments');
