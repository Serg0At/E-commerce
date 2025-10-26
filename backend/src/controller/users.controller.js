import { UsersServices } from "../services";
import { SuccessHandlerUtil } from "../utils";
import logger from "../utils/logger.util.js";

const usersLogger = logger.child({ scope: "UsersController" });

export default class UsersController {
  static async getMangalProduct(req, res, next) {
    const { type, limit, offset } = req.query;
    const log = usersLogger.child({
      method: "getMangalProduct",
      type,
      limit,
      offset
    });

    try {
      const data = await UsersServices.getMangalProduct(type, limit, offset);
      log.info("Fetched mangal products", { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error("Failed to fetch mangal products", { err: error });
      return next(error);
    }
  }

  static async getOtherProducts(req, res, next) {
    const { tableName, limit, offset } = req.query;
    const log = usersLogger.child({
      method: "getOtherProducts",
      tableName,
      limit,
      offset
    });

    try {
      const data = await UsersServices.getOtherProducts(tableName, limit, offset);
      log.info("Fetched other products", { itemCount: data?.length ?? 0 });
      return SuccessHandlerUtil.handleList(res, next, data);
    } catch (error) {
      log.error("Failed to fetch other products", { err: error });
      return next(error);
    }
  }

  static async getProduct(req, res, next) {
    const { tableName, id } = req.query;
    const log = usersLogger.child({
      method: "getProduct",
      tableName,
      id
    });

    try {
      const data = await UsersServices.getProduct(tableName, id);
      log.info("Fetched product");
      return SuccessHandlerUtil.handleGet(res, next, data);
    } catch (error) {
      log.error("Failed to fetch product", { err: error });
      return next(error);
    }
  }

  static async createOrderMessage(req, res, next) {
    const { name, phone } = req.body;
    const log = usersLogger.child({
      method: "createOrderMessage",
      phone
    });

    try {
      const data = await UsersServices.createOrderMessage(name, phone);
      log.info("Created order message");
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error("Failed to create order message", { err: error });
      return next(error);
    }
  }

  static async createHelpMessage(req, res, next) {
    const { name, phone, email, message } = req.body;
    const log = usersLogger.child({
      method: "createHelpMessage",
      email,
      phone
    });

    try {
      const data = await UsersServices.createHelpMessage(
        name,
        phone,
        email,
        message
      );
      log.info("Created help message");
      return SuccessHandlerUtil.handleAdd(res, next, data);
    } catch (error) {
      log.error("Failed to create help message", { err: error });
      return next(error);
    }
  }
}
