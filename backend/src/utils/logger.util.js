import fs from "fs";
import path from "path";
import winston from "winston";
import config from "../config/variables.config";
const { LOG_LEVEL } = config;
const logDirectory = path.resolve(process.cwd(), "logs");

if (!fs.existsSync(logDirectory)) {
  fs.mkdirSync(logDirectory, { recursive: true });
}

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'green',
  http: 'magenta',
  verbose: 'cyan',
  debug: 'blue',
  silly: 'grey'
});

const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};

const baseFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.errors({ stack: true }),
  winston.format.splat(),
  winston.format.json()
);

const consoleFormat = winston.format.combine(
  winston.format.colorize({ all: true }),
  winston.format.timestamp(),
  winston.format.printf(({ timestamp, level, message, stack, ...meta }) => {
    const metaPayload = Object.keys(meta).length ? ` ${JSON.stringify(meta)}` : '';
    const stackPayload = stack ? `\n${stack}` : '';
    return `[${timestamp}] ${level}: ${message}${metaPayload}${stackPayload}`;
  })
);

const logger = winston.createLogger({
  level: LOG_LEVEL,
  levels,
  defaultMeta: { service: 'backend' },
  format: baseFormat,
  transports: [
    new winston.transports.File({
      filename: path.join(logDirectory, 'error.log'),
      level: 'error'
    }),
    new winston.transports.File({
      filename: path.join(logDirectory, 'app.log')
    }),
    new winston.transports.Console({
      level: LOG_LEVEL,
      format: consoleFormat
    })
  ]
});

logger.stream = {
  write: message => logger.http(message.trim())
};

export default logger;
