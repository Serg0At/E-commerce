import knex from 'knex';
import bcrypt from "bcryptjs"
import knexConfigs from '../knex.configs';
import config  from '../src/config/variables.config';

const { ADMIN_EMAIL, ADMIN_PASSWORD } = config

async function seed(pg) {
  try {
    await pg('admin')
    .insert([
      {
        role : "admin",
        email: `${ADMIN_EMAIL}`,
        password: bcrypt.hashSync(ADMIN_PASSWORD, bcrypt.genSaltSync(10), null),
        created_at: new Date().toISOString(),
      },
    ])
  } catch (error) {
    console.error('Error inserting data:', error.message);
  }
}

async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    
    const pg = knex(options);
    
    await seed(pg);
    
    // Close the database connection
    await pg.destroy();
    
    console.log('Successfully inserted all data.');
  } catch (error) {
    console.error('Initialization error:', error.message);
  }
}

init();