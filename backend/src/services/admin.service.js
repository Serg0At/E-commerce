import AdminModel from "../models/admin.model.js";
import { UsersModel } from "../models/users.model";

import deleteFiles from "../services/delete.file";
import SendEmail from "../middlewares/nodemailer";

import UsersServices from "../services/users.service.js";
import createArticle from "../middlewares/createArticle.js";

import knex from "knex";
import knexConfigs from "../../knex.configs";
import { ErrorsUtil, HttpStatusCodesUtil } from "../utils";
import logger from "../utils/logger.util.js";

import "dotenv/config";

const pg = knex(knexConfigs.development);
const serviceLogger = logger.child({ scope: "AdminServices" });

const { MicroserviceError, ResourceNotFoundError, InputValidationError } =
  ErrorsUtil;

const TABLE_IMAGE_KEYS = {
  mangals: "mangals_id",
  garden_furniture_and_accessories: "garden_id",
  cauldrons_and_skewers: "cauldrons_id",
  tandoors: "tandoors_id",
  grills_without_lids: "grills_id",
  barbecues: "barbecues_id",
  shelters_for_grills_and_barbecues: "shelters_id"
};

const resolveFkColumn = tableName => {
  const fkColumn = TABLE_IMAGE_KEYS[tableName];

  if (!fkColumn) {
    throw new InputValidationError(
      "Unsupported table name provided.",
      HttpStatusCodesUtil.BAD_REQUEST
    );
  }

  return fkColumn;
};

export default class AdminServices {
  static async getProducts(tableName) {
    const log = serviceLogger.child({ method: "getProducts", tableName });

    try {
      const data = await AdminModel.getProducts(tableName);
      data.forEach(product => {
        delete product.created_at;
      });

      log.debug("Fetched products from table", { itemCount: data.length });
      return data;
    } catch (error) {
      log.error("Failed to fetch products", { err: error });
      throw new MicroserviceError(
        "Failed to fetch products",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async createNewMangalProduct(mangal, uploadDir, files) {
    const trx = await pg.transaction();
    const log = serviceLogger.child({ method: "createNewMangalProduct" });

    try {
      mangal.article = createArticle(
        mangal.title,
        mangal.price,
        mangal.overview
      );
      const product = await AdminModel.createNewMangalProduct(mangal, trx);

      const id = product[0].id;
      const data = [];

      files.forEach((file, index) => {
        const general = index === 0 ? "1" : "0";
        data.push({
          mangals_id: id,
          image_path: uploadDir + file.filename,
          general
        });
      });

      await AdminModel.createProductImages(data, trx);

      const searchData = {
        tableName: "mangals",
        productId: id,
        productArticle: mangal.article,
        productTitle: mangal.title
      };

      await AdminModel.createSearchData(searchData, trx);

      await trx.commit();
      log.info("Created mangal product", { productId: id });
      return { message: "Product created successful" };
    } catch (error) {
      await trx.rollback();
      log.error("Failed to create mangal product", { err: error });
      throw new MicroserviceError(
        "Failed to create mangal product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async editProduct(editData, tableName, id) {
    const log = serviceLogger.child({ method: "editProduct", tableName, id });

    try {
      delete editData.tableName;
      delete editData.id;

      await AdminModel.editProduct(editData, tableName, id);
      log.info("Edited product");
      return { message: "Product edited successful" };
    } catch (error) {
      log.error("Failed to edit product", { err: error });
      throw new MicroserviceError(
        "Failed to edit product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async deleteProduct(tableName, id) {
    const trx = await pg.transaction();
    const log = serviceLogger.child({ method: "deleteProduct", tableName, id });

    try {
      const fkColumn = resolveFkColumn(tableName);
      const images = await AdminModel.getImages(fkColumn, id, trx);

      await AdminModel.deleteProduct(tableName, id, trx);

      for (const image of images) {
        deleteFiles(image.image_path);
      }

      await trx.commit();
      log.info("Deleted product and associated assets");
      return { message: "Product deleted successful" };
    } catch (error) {
      await trx.rollback();
      log.error("Failed to delete product", { err: error });

      if (
        error instanceof ResourceNotFoundError ||
        error instanceof InputValidationError
      ) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to delete product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async createProduct(product, tableName, uploadDir, files) {
    const trx = await pg.transaction();
    const log = serviceLogger.child({ method: "createProduct", tableName });

    try {
      product.article = createArticle(
        product.title,
        product.price,
        product.overview
      );

      const fkColumn = resolveFkColumn(tableName);

      const prod = await AdminModel.createProduct(product, tableName, trx);
      const id = prod[0].id;
      const data = [];

      files.forEach((file, index) => {
        const general = index === 0 ? "1" : "0";
        const imagePath = uploadDir + file.filename;
        data.push({ [fkColumn]: id, image_path: imagePath, general });
      });

      await AdminModel.createProductImages(data, trx);

      const searchData = {
        tableName,
        productId: id,
        productArticle: prod[0].article,
        productTitle: prod[0].title
      };

      await AdminModel.createSearchData(searchData, trx);

      await trx.commit();
      log.info("Created product", { productId: id });
      return { message: "Product created successful" };
    } catch (error) {
      await trx.rollback();
      log.error("Failed to create product", { err: error });

      if (error instanceof InputValidationError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to create product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async uploadImage(tableName, productId, uploadDir, file) {
    const log = serviceLogger.child({ method: "uploadImage", tableName, productId });

    try {
      const filePath = uploadDir + file.filename;
      const fkColumn = resolveFkColumn(tableName);

      await AdminModel.uploadImage(fkColumn, productId, 0, filePath);
      log.info("Uploaded image");
      return { message: "Image uploaded successful" };
    } catch (error) {
      log.error("Failed to upload image", { err: error });

      if (error instanceof InputValidationError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to upload image",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async deleteImage(id) {
    const trx = await pg.transaction();
    const log = serviceLogger.child({ method: "deleteImage", id });

    try {
      const image = await AdminModel.getImageById(id, trx);

      if (!image?.length) {
        throw new ResourceNotFoundError(
          "Image not found",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      const imagePath = image[0].image_path;
      deleteFiles(imagePath);
      await AdminModel.deleteImage(id, trx);
      await trx.commit();
      log.info("Deleted image");
      return { message: "Image deleted successful" };
    } catch (error) {
      await trx.rollback();
      log.error("Failed to delete image", { err: error });

      if (
        error instanceof ResourceNotFoundError ||
        error instanceof InputValidationError
      ) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to delete image",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getProductImages(id, tableName) {
    const log = serviceLogger.child({ method: "getProductImages", id, tableName });

    try {
      const fkColumn = resolveFkColumn(tableName);
      const images = await AdminModel.getProductImages(id, fkColumn);

      log.debug("Fetched product images", { itemCount: images.length });
      return images.map(image => ({
        id: image.id,
        image_path: image.image_path
      }));
    } catch (error) {
      log.error("Failed to fetch product images", { err: error });

      if (error instanceof InputValidationError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to fetch product images",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getAllMessages() {
    const log = serviceLogger.child({ method: "getAllMessages" });

    try {
      const messages = await AdminModel.getAllMessages();
      log.debug("Fetched admin messages", { itemCount: messages.length });
      return messages;
    } catch (error) {
      log.error("Failed to fetch admin messages", { err: error });
      throw new MicroserviceError(
        "Failed to fetch admin messages",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async deleteMessage(id) {
    const log = serviceLogger.child({ method: "deleteMessage", id });

    try {
      const deleted = await AdminModel.deleteMessage(id);

      if (!deleted) {
        throw new ResourceNotFoundError(
          "Message not found",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      log.info("Deleted admin message");
      return { message: "Message deleted successful" };
    } catch (error) {
      log.error("Failed to delete admin message", { err: error });

      if (
        error instanceof ResourceNotFoundError ||
        error instanceof InputValidationError
      ) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to delete admin message",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async sendMessage(name, email, content1, content2, content3) {
    const log = serviceLogger.child({ method: "sendMessage", email });

    try {
      const emailOptions = {
        user: name,
        email,
        content1,
        content2,
        content3
      };

      await SendEmail.sendEmail(emailOptions);
      log.info("Sent message");
      return { message: "Message sent successful" };
    } catch (error) {
      log.error("Failed to send message", { err: error });
      throw new MicroserviceError(
        "Failed to send message",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async getPopularProducts(tableName) {
    const trx = await pg.transaction();
    const log = serviceLogger.child({ method: "getPopularProducts", tableName });

    try {
      const randomProducts = await AdminModel.getRandomProducts(tableName, trx);
      const fkColumn = resolveFkColumn(tableName);

      for (const product of randomProducts) {
        const image = await UsersModel.getProductImagesById(
          fkColumn,
          product.id,
          trx
        );
        product.generalImage = image[0]?.image_path;
      }

      await trx.commit();
      log.info("Fetched popular products", { itemCount: randomProducts.length });
      return randomProducts;
    } catch (error) {
      await trx.rollback();
      log.error("Failed to fetch popular products", { err: error });

      if (error instanceof InputValidationError) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to fetch popular products",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }

  static async searchProduct(keyWord) {
    const log = serviceLogger.child({ method: "searchProduct", keyWord });

    try {
      const product = await AdminModel.searchProduct(keyWord);

      if (!product?.length) {
        throw new ResourceNotFoundError(
          "Product not found",
          HttpStatusCodesUtil.NOT_FOUND
        );
      }

      const result = await UsersServices.getProduct(
        product[0].tableName,
        product[0].productId
      );

      log.info("Search completed", { found: Boolean(result) });
      return result;
    } catch (error) {
      log.error("Failed to search product", { err: error });

      if (
        error instanceof ResourceNotFoundError ||
        error instanceof InputValidationError
      ) {
        throw error;
      }

      throw new MicroserviceError(
        "Failed to search product",
        HttpStatusCodesUtil.INTERNAL_SERVER_ERROR
      );
    }
  }
}
