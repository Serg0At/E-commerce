import http from "http";

import { HttpStatusCodesUtil } from "../utils";
import logger from "../utils/logger.util.js";

const errorLogger = logger.child({ scope: "ErrorHandlerMiddleware" });

export default class ErrorHandlerMiddleware {
  static init(error, request, response, next) {
    const ERROR_CASE =
      ErrorHandlerMiddleware.ERROR_CASES[error.status] ||
      ErrorHandlerMiddleware.ERROR_CASES[error.code] ||
      ErrorHandlerMiddleware.ERROR_CASES[error.name] ||
      ErrorHandlerMiddleware.ERROR_CASES.DEFAULT;

    const { status, code, message } = ERROR_CASE;

    const result = {
      status,
      code,
      message: message || error.message,
      data: error.data,
    };

    if (result.status >= 500) {
      errorLogger.error("Unhandled error response", {
        err: error,
        result
      });
    } else {
      errorLogger.warn("Handled error response", {
        err: error,
        result
      });
    }

    response.status(result.status).json(result);
  }
}

ErrorHandlerMiddleware.ERROR_CASES = {
  400: {
    // microservice, error status is used
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  ExpiredTokenConfirmError: {
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  ExpiredEmailConfirmError: {
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  InputValidationError: {
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  InvalidEmailConfirmError: {
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  InvalidPasswordError: {
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  SyntaxError: {
    // body-parser
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  11000: {
    // mongodb
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
    message: "Duplicate entry.",
  },
  DocumentNotFoundError: {
    // mongodb
    status: HttpStatusCodesUtil.NOT_FOUND,
    code: http.STATUS_CODES[HttpStatusCodesUtil.NOT_FOUND],
    message: "Document Not Found.",
  },
  CastError: {
    // mongodb
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  ValidationError: {
    // mongodb
    status: HttpStatusCodesUtil.BAD_REQUEST,
    code: http.STATUS_CODES[HttpStatusCodesUtil.BAD_REQUEST],
  },
  401: {
    // microservice, error status is used
    status: HttpStatusCodesUtil.UNAUTHORIZED,
    code: http.STATUS_CODES[HttpStatusCodesUtil.UNAUTHORIZED],
  },
  UnauthorizedError: {
    status: HttpStatusCodesUtil.UNAUTHORIZED,
    code: http.STATUS_CODES[HttpStatusCodesUtil.UNAUTHORIZED],
  },
  Forbidden: {
    status: HttpStatusCodesUtil.FORBIDDEN,
    code: http.STATUS_CODES[HttpStatusCodesUtil.FORBIDDEN],
  },
  ForbiddenError: {
    status: HttpStatusCodesUtil.FORBIDDEN,
    code: http.STATUS_CODES[HttpStatusCodesUtil.FORBIDDEN],
  },
  PermissionError: {
    status: HttpStatusCodesUtil.FORBIDDEN,
    code: http.STATUS_CODES[HttpStatusCodesUtil.FORBIDDEN],
  },
  404: {
    // microservice, error status is used
    status: HttpStatusCodesUtil.NOT_FOUND,
    code: http.STATUS_CODES[HttpStatusCodesUtil.NOT_FOUND],
  },
  ResourceNotFoundError: {
    status: HttpStatusCodesUtil.NOT_FOUND,
    code: http.STATUS_CODES[HttpStatusCodesUtil.NOT_FOUND],
  },
  ConflictError: {
    status: HttpStatusCodesUtil.CONFLICT,
    code: http.STATUS_CODES[HttpStatusCodesUtil.CONFLICT],
  },
  MicroserviceError: {
    status: HttpStatusCodesUtil.FAILED_DEPENDENCY,
    code: http.STATUS_CODES[HttpStatusCodesUtil.FAILED_DEPENDENCY],
  },
  DEFAULT: {
    status: HttpStatusCodesUtil.INTERNAL_SERVER_ERROR,
    code: http.STATUS_CODES[HttpStatusCodesUtil.INTERNAL_SERVER_ERROR],
    message: "The server encountered an internal error. Try again later.",
  },
};
