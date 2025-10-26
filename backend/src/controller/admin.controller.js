import AdminServices from '../services/admin.service.js';
import { SuccessHandlerUtil } from '../utils';
import logger from '../utils/logger.util.js';

const adminLogger = logger.child({ scope: 'AdminController' });

export class AdminController {
  static async getProducts(req, res, next) {
    const { tableName } = req.query;
    const log = adminLogger.child({ method: 'getProducts', tableName });

    try {
      const data = await AdminServices.getProducts(tableName);
      log.info('Fetched products', { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error('Failed to fetch products', { err: error });
      return next(error);
    }
  }

  static async createNewMangalProduct(req, res, next) {
    const log = adminLogger.child({ method: 'createNewMangalProduct' });

    try {
      const mangal = {
        title: req.body.title,
        type: req.body.type,
        price: req.body.price,
        discount: req.body.discount,
        material: req.body.material,
        height: req.body.height,
        width: req.body.width,
        thickness: req.body.thickness,
        overview: req.body.overview,
        length: req.body.length,
        grill_height: req.body.grill_height,
        ratings: [0, 0, 0, 0, 0],
        series: req.body.series,
        status: req.body.status
      };

      const uploadDir = req.body.uploadDir;
      const files = req.files;

      const data = await AdminServices.createNewMangalProduct(
        mangal,
        uploadDir,
        files
      );

      log.info('Created mangal product', { title: mangal.title });
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error('Failed to create mangal product', { err: error });
      return next(error);
    }
  }

  static async createProduct(req, res, next) {
    const log = adminLogger.child({ method: 'createProduct' });

    try {
      const uploadDir = req.body.uploadDir;

      const product = {
        title: req.body.title,
        price: req.body.price,
        discount: req.body.discount,
        overview: req.body.overview,
        size: req.body.size,
        ratings: [0, 0, 0, 0, 0],
        status: req.body.status
      };

      const files = req.files;
      const tableName = req.query.table;

      const data = await AdminServices.createProduct(
        product,
        tableName,
        uploadDir,
        files
      );

      log.info('Created product', { title: product.title, tableName });
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error('Failed to create product', { err: error });
      return next(error);
    }
  }

  static async editProduct(req, res, next) {
    const { tableName, id } = req.body;
    const log = adminLogger.child({ method: 'editProduct', tableName, id });

    try {
      const editData = req.body;
      const data = await AdminServices.editProduct(editData, tableName, id);

      log.info('Edited product');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to edit product', { err: error });
      return next(error);
    }
  }

  static async deleteProduct(req, res, next) {
    const { tableName, id } = req.body;
    const log = adminLogger.child({ method: 'deleteProduct', tableName, id });

    try {
      const data = await AdminServices.deleteProduct(tableName, id);
      log.info('Deleted product');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to delete product', { err: error });
      return next(error);
    }
  }

  static async publishProduct(req, res, next) {
    const { tableName, id } = req.body;
    const log = adminLogger.child({ method: 'publishProduct', tableName, id });

    try {
      const editData = req.body;
      const data = await AdminServices.editProduct(editData, tableName, id);

      log.info('Published product');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to publish product', { err: error });
      return next(error);
    }
  }

  static async unpublishProduct(req, res, next) {
    const { tableName, id } = req.body;
    const log = adminLogger.child({ method: 'unpublishProduct', tableName, id });

    try {
      const editData = req.body;
      const data = await AdminServices.editProduct(editData, tableName, id);

      log.info('Unpublished product');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to unpublish product', { err: error });
      return next(error);
    }
  }

  static async uploadImage(req, res, next) {
    const { tableName, productId } = req.query;
    const log = adminLogger.child({
      method: 'uploadImage',
      tableName,
      productId
    });

    try {
      const uploadDir = req.body.uploadDir;
      const file = req.file;

      const data = await AdminServices.uploadImage(
        tableName,
        productId,
        uploadDir,
        file
      );

      log.info('Uploaded image');
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error('Failed to upload image', { err: error });
      return next(error);
    }
  }

  static async deleteImage(req, res, next) {
    const { id } = req.query;
    const log = adminLogger.child({ method: 'deleteImage', id });

    try {
      const data = await AdminServices.deleteImage(id);
      log.info('Deleted image');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to delete image', { err: error });
      return next(error);
    }
  }

  static async getProductImages(req, res, next) {
    const { id, tableName } = req.query;
    const log = adminLogger.child({
      method: 'getProductImages',
      tableName,
      id
    });

    try {
      const data = await AdminServices.getProductImages(id, tableName);
      log.info('Fetched product images', { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error('Failed to fetch product images', { err: error });
      return next(error);
    }
  }

  static async getAllMessages(req, res, next) {
    const log = adminLogger.child({ method: 'getAllMessages' });

    try {
      const data = await AdminServices.getAllMessages();
      log.info('Fetched admin messages', { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error('Failed to fetch admin messages', { err: error });
      return next(error);
    }
  }

  static async deleteMessage(req, res, next) {
    const { id } = req.query;
    const log = adminLogger.child({ method: 'deleteMessage', id });

    try {
      const data = await AdminServices.deleteMessage(id);
      log.info('Deleted admin message');
      return SuccessHandlerUtil.handleUpdate(res, next, data);
    } catch (error) {
      log.error('Failed to delete admin message', { err: error });
      return next(error);
    }
  }

  static async sendMessage(req, res, next) {
    const log = adminLogger.child({ method: 'sendMessage' });

    try {
      const { name, email, content1, content2, content3 } = req.body;
      const data = await AdminServices.sendMessage(
        name,
        email,
        content1,
        content2,
        content3
      );

      log.info('Sent admin message', { email });
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error('Failed to send admin message', { err: error });
      return next(error);
    }
  }

  static async getPopularProducts(req, res, next) {
    const { tableName } = req.query;
    const log = adminLogger.child({
      method: 'getPopularProducts',
      tableName
    });

    try {
      const data = await AdminServices.getPopularProducts(tableName);
      log.info('Fetched popular products', { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error('Failed to fetch popular products', { err: error });
      return next(error);
    }
  }

  static async searchProduct(req, res, next) {
    const { keyWord } = req.query;
    const log = adminLogger.child({ method: 'searchProduct', keyWord });

    try {
      const data = await AdminServices.searchProduct(keyWord);
      log.info('Searched product', { found: Boolean(data) });
      return SuccessHandlerUtil.handleGet(res, next, data);
    } catch (error) {
      log.error('Failed to search product', { err: error });
      return next(error);
    }
  }
}

