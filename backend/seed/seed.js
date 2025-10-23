import knex from 'knex';
import knexConfigs from '../knex.configs';
import bCrypt from "bcryptjs"
import config  from '../src/config/variables.config';
import path  from "path";
const {ADMIN_PASSWORD} = config
async function seed(pg) {

  try {
  
    await pg('admin').insert([
      {
        role : "admin",
        email: 'arkadi.gabrielyan.0000@mail.ru',
        password: bCrypt.hashSync(ADMIN_PASSWORD, bCrypt.genSaltSync(10), null),
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
