// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

function up(pg) {
  return pg.schema
    .createTable('admin', (table) => {
      table.increments('id').primary();
      table.string('role').notNullable();
      table.string('email').notNullable();
      table.string('password').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })

    .createTable('mangals', (table) => { 
      table.increments('id').primary();
      table.string('type').notNullable();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.string('material').notNullable();
      table.string('thickness').notNullable();
      table.string('height').notNullable();
      table.string('width').notNullable();
      table.string('length').notNullable();
      table.string('grill_height').notNullable();
      table.string('series').notNullable();
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('garden_furniture_and_accessories', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('cauldrons_and_skewers', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('tandoors', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('grills_without_lids', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('barbecues', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
    .createTable('shelters_for_grills_and_barbecues', (table) => {
      table.increments('id').primary();
      table.string('title').notNullable();
      table.integer('price').notNullable();
      table.integer('discount');
      table.text('overview').notNullable();
      table.text('complect');
      table.integer('size');
      table.specificType('ratings', 'integer[]').notNullable();
      table.text('article').notNullable();
      table.string('status').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })

    .createTable('images', (table) => {
      table.increments('id').notNullable().primary();
      table.integer('mangals_id').unsigned().references('id').inTable('mangals').onDelete('CASCADE')
      table.integer('garden_id').unsigned().references('id').inTable('garden_furniture_and_accessories').onDelete('CASCADE')
      table.integer('cauldrons_id').unsigned().references('id').inTable('cauldrons_and_skewers').onDelete('CASCADE')
      table.integer('tandoors_id').unsigned().references('id').inTable('tandoors').onDelete('CASCADE')
      table.integer('grills_id').unsigned().references('id').inTable('grills_without_lids').onDelete('CASCADE')
      table.integer('barbecues_id').unsigned().references('id').inTable('barbecues').onDelete('CASCADE')
      table.integer('shelters_id').unsigned().references('id').inTable('shelters_for_grills_and_barbecues').onDelete('CASCADE')
      table.string('image_path');
      table.string('general').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
  
    .createTable('messages', (table) => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('phone').notNullable();
      table.string('email').notNullable();
      table.text('message').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })

    .createTable('search', (table) => {
      table.increments('id').primary();
      table.string('tableName').notNullable();
      table.string('productId').notNullable();
      table.string('productArticle').notNullable();
      table.text('productTitle').notNullable();
      table.dateTime('created_at').defaultTo(pg.fn.now());
  })
  
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await up(pg);
    console.log('Successfully created all tables');
    process.kill(process.pid)

  } catch (error) {
    console.log(error.message);
  }
}

init();

