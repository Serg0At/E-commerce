import { UsersModel } from "../models/users.model";
import "dotenv/config";

import knex from "knex";
import knexConfigs from "../../knex.configs";
import { ErrorsUtil, HttpStatusCodesUtil } from "../utils";
import logger from "../utils/logger.util.js";

const pg = knex(knexConfigs.development);
const userLogger = logger.child({ scope: "UsersServices" });
const { MicroserviceError, ResourceNotFoundError } = ErrorsUtil;

export default class UsersServices {

  static async getMangalProduct(type, limit, offset) {
    const trx = await pg.transaction();
    const log = userLogger.child({ method: "getMangalProduct", type, limit, offset });

    try {
      const data = await UsersModel.getMangalProduct(type, limit, offset, trx);

      if (!data.length) {
        throw new ResourceNotFoundError(
          "Product is not available!",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      for (const product of data) {
        const image = await UsersModel.getMangalImagesById(product.id, trx);
        product.generalImage = image[0]?.image_path;
      }

      await trx.commit();
      log.info("Fetched mangal products", { itemCount: data.length });
      return data;
    } catch (error) {
      await trx.rollback();
      log.error("Failed to fetch mangal products", { err: error });

      if (error instanceof ResourceNotFoundError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to fetch mangal products",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  };

  static async getOtherProducts(tableName, limit, offset) {
    const trx = await pg.transaction();
    const log = userLogger.child({
      method: "getOtherProducts",
      tableName,
      limit,
      offset
    });

    try {
      const data = await UsersModel.getOtherProducts(tableName, limit, offset, trx);

      if (!data.length) {
        throw new ResourceNotFoundError(
          "Product is not available!",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      const confObj = {
        "garden_furniture_and_accessories": "garden_id",
        "cauldrons_and_skewers": "cauldrons_id",
        "tandoors": "tandoors_id",
        "grills_without_lids": "grills_id",
        "barbecues": "barbecues_id",
        "shelters_for_grills_and_barbecues": "shelters_id"
      };

      const fkColumn = confObj[tableName];

      for (const product of data) {
        const image = await UsersModel.getProductImagesById(fkColumn, product.id, trx);
        product.generalImage = image[0]?.image_path;
      }

      await trx.commit();
      log.info("Fetched products", { itemCount: data.length });
      return data;
    } catch (error) {
      await trx.rollback();
      log.error("Failed to fetch products", { err: error });

      if (error instanceof ResourceNotFoundError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to fetch products",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  };

  static async getProduct(tableName, id) {
    const trx = await pg.transaction();
    const log = userLogger.child({ method: "getProduct", tableName, id });

    try {
      const product = await UsersModel.getProduct(tableName, id, trx);

      if (!product.length) {
        throw new ResourceNotFoundError(
          "Product is not available!",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      const confObj = {
        mangals: "mangals_id",
        garden_furniture_and_accessories: "garden_id",
        cauldrons_and_skewers: "cauldrons_id",
        tandoors: "tandoors_id",
        grills_without_lids: "grills_id",
        barbecues: "barbecues_id",
        shelters_for_grills_and_barbecues: "shelters_id"
      };

      const fkColumn = confObj[tableName];

      const images = await UsersModel.getProductAllImagesById(fkColumn, id, trx);
      product[0].images = images.map(image => image.image_path);

      await trx.commit();
      log.info("Fetched product with images");
      return product;
    } catch (error) {
      await trx.rollback();
      log.error("Failed to fetch product", { err: error });

      if (error instanceof ResourceNotFoundError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to fetch product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  };


  static async createOrderMessage(name, phone) {
    const log = userLogger.child({
      method: "createOrderMessage",
      phone
    });

    try {
      const data = {
        name,
        phone,
        email: "dont have email",
        message: "dont have message"
      };

      await UsersModel.createMessage(data);
      log.info("Created order message");
      return { message: "Message sent!" };
    } catch (error) {
      log.error("Failed to create order message", { err: error });
      throw new MicroserviceError(
        "Failed to create order message",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  };

  static async createHelpMessage(name, phone, email, message) {
    const log = userLogger.child({
      method: "createHelpMessage",
      email,
      phone
    });

    try {
      const data = {
        name,
        phone,
        email,
        message
      };

      await UsersModel.createMessage(data);
      log.info("Created help message");
      return { message: "Message sent!" };
    } catch (error) {
      log.error("Failed to create help message", { err: error });
      throw new MicroserviceError(
        "Failed to create help message",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  };
  
}
