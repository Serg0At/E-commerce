const HTTP_STATUS_CODES = {
  // --- 1xx: Informational ---
  CONTINUE: 100,
  SWITCHING_PROTOCOLS: 101,
  PROCESSING: 102,
  EARLY_HINTS: 103,

  // --- 2xx: Success ---
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
  NO_CONTENT: 204,
  RESET_CONTENT: 205,
  PARTIAL_CONTENT: 206,
  MULTI_STATUS: 207,

  // --- 3xx: Redirection ---
  MULTIPLE_CHOICES: 300,
  MOVED_PERMANENTLY: 301,
  FOUND: 302,
  SEE_OTHER: 303,
  NOT_MODIFIED: 304,
  TEMPORARY_REDIRECT: 307,
  PERMANENT_REDIRECT: 308,

  // --- 4xx: Client Error ---
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  IM_A_TEAPOT: 418, // ☕ fun one
  UNPROCESSABLE_ENTITY: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,

  // --- 5xx: Server Error ---
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  BANDWIDTH_LIMIT_EXCEEDED: 509,
  NOT_EXTENDED: 510,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};

// Reverse mapping: number → name
const STATUS_NAMES = Object.fromEntries(
  Object.entries(HTTP_STATUS_CODES).map(([key, value]) => [value, key])
);

// Helpers 🔧
const isInformational = code => code >= 100 && code < 200;
const isSuccess = code => code >= 200 && code < 300;
const isRedirect = code => code >= 300 && code < 400;
const isClientError = code => code >= 400 && code < 500;
const isServerError = code => code >= 500 && code < 600;

// Quick Response
const makeResponse = (code, message, data = null) => ({
  status: code,
  message: message || STATUS_NAMES[code] || "Unknown Status",
  data
});

// Common responses
const RESPONSES = {
  OK: makeResponse(HTTP_STATUS_CODES.OK, "Success"),
  CREATED: makeResponse(HTTP_STATUS_CODES.CREATED, "Resource created"),
  BAD_REQUEST: makeResponse(HTTP_STATUS_CODES.BAD_REQUEST, "Invalid request"),
  UNAUTHORIZED: makeResponse(HTTP_STATUS_CODES.UNAUTHORIZED, "Unauthorized"),
  FORBIDDEN: makeResponse(HTTP_STATUS_CODES.FORBIDDEN, "Access denied"),
  NOT_FOUND: makeResponse(HTTP_STATUS_CODES.NOT_FOUND, "Resource not found"),
  INTERNAL_ERROR: makeResponse(HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR, "Server error")
};

export {
  HTTP_STATUS_CODES,
  STATUS_NAMES,
  isInformational,
  isSuccess,
  isRedirect,
  isClientError,
  isServerError,
  makeResponse,
  RESPONSES
};

const HttpStatusCodesUtil = HTTP_STATUS_CODES;

export default HttpStatusCodesUtil;

// 🔚 Usage example:
// import { HTTP_STATUS_CODES, makeResponse, isSuccess }
// res.status(HTTP_STATUS_CODES.CREATED).json(makeResponse(201, "User created", user));
