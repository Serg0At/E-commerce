import  {UsersModel}  from "../models/users.model";
// import SendEmail from "../middlewares/nodemailer";
import 'dotenv/config';

import knex from "knex";
import knexConfigs from "../../knex.configs";

const pg = knex(knexConfigs.development);

export default class UsersServices {

  static async getMangalProduct(type, limit, offset) {
    try {

      const trx = await pg.transaction()
      let retData
      const data = await UsersModel.getMangalProduct(type, limit, offset, trx);

      if (data.length != 0) {
        retData = { message: "Продукт отсутвует!" }
      } else {
        for (const product of data) {
          const image = await UsersModel.getMangalImagesById(product.id,trx)
          product.generalImage = image[0].image_path
          retData = data
        };
      };
      
      await trx.commit()
      return retData
      
    } catch (error) {
      await trx.rollback()
    }
  };

  static async getOtherProducts(tableName, limit, offset) {
    try {
      const trx = await pg.transaction();
      const data = await UsersModel.getOtherProducts(tableName, limit, offset, trx);

      if (data.length == 0) {
        return { message: "Продукт отсутвует!" };
      };

      const confObj = {
          "garden_furniture_and_accessories": "garden_id",
          "cauldrons_and_skewers": "cauldrons_id",
          "tandoors": "tandoors_id",
          "grills_without_lids": "grills_id",
          "barbecues": "barbecues_id",
          "shelters_for_grills_and_barbecues": "shelters_id",
      };

      const fkColumn = confObj[tableName]        

      for (const product of data) {
        
      const image = await UsersModel.getProductImagesById(fkColumn, product.id, trx)        
        product.generalImage = image[0].image_path
      };
      
      await trx.commit()
      return data;

    } catch (error) {
      await trx.rollback()
    }
  };

  static async getProduct(tableName, id){
      try {
        const trx = await pg.transaction();

        const product = await UsersModel.getProduct(tableName, id, trx);

        if (product.length == 0) {
          return { message: "Продукт отсутвует!" }
        };

        const confObj = {
                "mangals": "mangals_id",
                "garden_furniture_and_accessories": "garden_id",
                "cauldrons_and_skewers": "cauldrons_id",
                "tandoors": "tandoors_id",
                "grills_without_lids": "grills_id",
                "barbecues": "barbecues_id",
                "shelters_for_grills_and_barbecues": "shelters_id",
        };
        
        const fkColumn = confObj[tableName]

        const images = await UsersModel.getProductAllImagesById(fkColumn,id,trx)
    
        const imagesArray = [];

        images.forEach((image) => {
          imagesArray.push(image.image_path)
        })
      
        product[0].images = imagesArray;

        await trx.commit()
        return product;

      } catch (error) {
        await trx.rollback()
      }
  };


  static async createOrderMessage(name, phone) {
    const data = {
      name,
      phone,
      email: 'dont have email',
      message: 'dont have message'
    };

    await UsersModel.createMessage(data);

    return { message: "Ваше сообщение отправлено" }
  };


  static async createHelpMessage(name, phone, email, message) {
    const data = {
      name,
      phone,
      email,
      message
    };

    await UsersModel.createMessage(data);

    return { message: "Ваше сообщение отправлено" };
  };
  
}