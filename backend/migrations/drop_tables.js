// NPM Modules
import knex from 'knex';
import knexConfigs from '../knex.configs';

// Local Modules


function down(pg) {
  return pg.schema
    
    .dropTableIfExists('admin')
    .dropTableIfExists('images')
    .dropTableIfExists('mangals')
    .dropTableIfExists('garden_furniture_and_accessories')
    .dropTableIfExists('cauldrons_and_skewers')
    .dropTableIfExists('tandoors')
    .dropTableIfExists('grills_without_lids')
    .dropTableIfExists('barbecues')
    .dropTableIfExists('shelters_for_grills_and_barbecues')
    .dropTableIfExists('messages')
    .dropTableIfExists('like')
    

}


async function init() {
  try {
    const options = process.env.NODE_ENV === 'production'
      ? knexConfigs.production
      : knexConfigs.development;
    const pg = knex(options);
    await down(pg);
    console.log('Successfully dropped all tables1 ... ');
  } catch (error) {
    console.log(error.message);
  }
}

init();
