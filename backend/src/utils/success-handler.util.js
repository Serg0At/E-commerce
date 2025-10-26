import ErrorsUtil from './errors.util';
import HttpStatusCodesUtil from './http-status-codes.util';

const { ResourceNotFoundError } = ErrorsUtil;

export default class SuccessHandlerUtil {
  static _sendResponse(response, status, data) {
    if (
      status === HttpStatusCodesUtil.NO_CONTENT ||
      typeof data === "undefined"
    ) {
      return response.status(status).send();
    }

    return response.status(status).json(data);
  }
  
  static handleTokenVerification(response, next, result) {
    return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.OK, result);
  }

  static handleList(res, next, result) {
    SuccessHandlerUtil._sendResponse(res, HttpStatusCodesUtil.OK, result);
  }

  static handleAdd(response, next, result) {
    if (!result) {
      return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.NO_CONTENT);
    }
    return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.CREATED, result);
  }

  static handleGet(response, next, result) {
    if (!result) {
      return next(new ResourceNotFoundError('The specified resource is not found.'));
    }
    return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.OK, result);
  }


  static handleUpdate(response, next, result) {
    if (!result) {
      return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.NO_CONTENT);
    }
    return SuccessHandlerUtil._sendResponse(response, HttpStatusCodesUtil.OK, result);
  }
}
