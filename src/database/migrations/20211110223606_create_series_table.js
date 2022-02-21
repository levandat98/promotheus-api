export const up = async knex =>
  knex.schema.createTable('series', table => {
    table.increments('id').primary();
    table.string('name');
    table.string('description');
    table.float('rating').default(0);
    table.integer('ratingCount');
    table.integer('creatorId');
    table
      .foreign('creatorId')
      .references('users.id')
      .onDelete('CASCADE');
    table.timestamp('createdAt').defaultTo(knex.fn.now());
    table.timestamp('updatedAt').defaultTo(knex.fn.now());
    table.timestamp('deletedAt').defaultTo(null);
  });

export const down = async knex => knex.schema.dropTableIfExists('series');
