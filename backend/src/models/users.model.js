import knex from "knex";
import knexConfigs from "../../knex.configs";
const pg = knex(knexConfigs.development);

export class UsersModel {
  static async findByEmail(email) {
    return await pg("admin").select("*").where({ email: email })
  }

  static async getMangalProduct(type, limit, offset, trx) {
    return await pg("mangals").select("*").where({ type: type, status: "1" }).limit(limit).offset(offset).transacting(trx)
  }
  
  static async getOtherProducts(tableName, limit, offset, trx) {
    return await pg(tableName).select("*").where({status: "1" }).limit(limit).offset(offset).transacting(trx)
  }

  static async getProduct(tableName, id, trx) {
    return await pg(tableName).select("*").where({id: id}).transacting(trx)
  }
  
  static async getMangalImagesById(id, trx) {
    return await pg('images').select("*").where({mangals_id: id, general: "1"}).transacting(trx)
  }

  static async getProductImagesById(fkColumn, id, trx) {
    return await pg('images').select("*").where({[fkColumn] : id, general: "1"}).transacting(trx)
  }

  static async getProductAllImagesById(fkColumn, id, trx) {
    return await pg('images').select("*").where({[fkColumn] : id}).transacting(trx)
  }

  static async createMessage(data) {
    await pg('messages').insert(data)
  }
}

