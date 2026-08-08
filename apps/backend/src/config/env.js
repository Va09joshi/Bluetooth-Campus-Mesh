import dotenv from "dotenv";

dotenv.config();

const requiredVariables = [
  "PORT",
  "DATABASE_URL",
  "JWT_ACCESS_SECRET",
  "JWT_REFRESH_SECRET",
];

requiredVariables.forEach((key) => {
  if (!process.env[key]) {
    throw new Error(`❌ Missing environment variable: ${key}`);
  }
});

const env = {
  app: {
    nodeEnv: process.env.NODE_ENV || "development",
    name: process.env.APP_NAME || "CampusMesh API",
    version: process.env.APP_VERSION || "1.0.0",
    port: Number(process.env.PORT),
    apiPrefix: process.env.API_PREFIX || "/api/v1",
  },

  client: {
    web: process.env.CLIENT_URL,
    mobile: process.env.MOBILE_URL,
    corsOrigins: process.env.CORS_ORIGIN
      ? process.env.CORS_ORIGIN.split(",")
      : [],
  },

  database: {
    url: process.env.DATABASE_URL,
  },

  jwt: {
    accessSecret: process.env.JWT_ACCESS_SECRET,
    refreshSecret: process.env.JWT_REFRESH_SECRET,
    accessExpiresIn:
      process.env.JWT_ACCESS_EXPIRES_IN || "15m",
    refreshExpiresIn:
      process.env.JWT_REFRESH_EXPIRES_IN || "7d",
  },

  bcrypt: {
    saltRounds: Number(
      process.env.BCRYPT_SALT_ROUNDS || 12
    ),
  },

  aws: {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    bucket: process.env.AWS_S3_BUCKET,
    presignedUrlExpires: Number(
      process.env.AWS_PRESIGNED_URL_EXPIRES || 300
    ),
  },

  upload: {
    maxFileSize: Number(
      process.env.MAX_FILE_SIZE || 10485760
    ),
    allowedTypes: process.env.UPLOAD_ALLOWED_TYPES
      ? process.env.UPLOAD_ALLOWED_TYPES.split(",")
      : [],
  },

  logger: {
    level: process.env.LOG_LEVEL || "info",
  },

  ble: {
    scanInterval: Number(
      process.env.BLE_SCAN_INTERVAL || 5000
    ),
    connectionTimeout: Number(
      process.env.BLE_CONNECTION_TIMEOUT || 15000
    ),
  },
};

export default Object.freeze(env);