import knex from "knex";
import knexConfigs from "../../knex.configs";
const pg = knex(knexConfigs.development);

export default class AdminModel {
  
static async getProducts(tableName){
  return await pg(tableName).select('*')
 }
static async createNewMangalProduct(data,trx){
  return await pg('mangals').insert(data).transacting(trx).returning('*')
 }
 static async createSearchData(searchData, trx){
   await pg('search').insert(searchData).transacting(trx)
 }
 
static async editProduct(data, tableName, id){
   await pg(tableName).update(data).where({id: id})
 }

static async deleteProduct(tableName, id, trx){
   await pg(tableName).where({id: id}).del().transacting(trx)
 }

static async createProduct(product,tableName,trx){
  return await pg(tableName).insert(product).returning('*').transacting(trx)
 }

 static async createProductImages(data,trx){
  await pg('images').insert(data).transacting(trx)
 }
 static async uploadImage(fkColumn,productId,general,filePath){
  await pg('images').insert({[fkColumn]: productId, image_path: filePath, general: general})
 }
static async getImageById(id,trx){
  return await pg('images').select('*').where({id:id}).transacting(trx)
 }
 static async getImages(fkColumn, id, trx){
  return await pg('images').select('*').where({[fkColumn]:id}).transacting(trx)
 }
static async deleteImage(id,trx){
  return await pg('images').where({id:id}).del().transacting(trx)
 }

 static async getProductImages(id,fkColumn){
  return await pg('images').select('*').where({[fkColumn]:id})
 }
 static async getAllMessages(){
  return await pg('messages').select('*')
 }
 
  static async deleteMessage(id){
  await pg('messages').where({id: id}).del()
 }
 
  static async getRandomProducts(tableName,trx){
    return await pg(tableName).orderByRaw('RANDOM()').limit(10).transacting(trx)
 }

  static async searchProduct(keyWord){
    return pg('search')
    .where('productArticle', keyWord)
    .orWhere('productTitle', 'ilike', `%${keyWord}%`)
    
 }

 
}
