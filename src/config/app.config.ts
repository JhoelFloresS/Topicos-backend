import "dotenv/config";

export const EnvConfig = () => ({
    APP_NAME: process.env.APP_NAME || 'NodeJS API',
    APP_PROD: process.env.APP_PROD,
    APP_VERSION: process.env.APP_VERSION,
    APP_PORT: Number(process.env.APP_PORT) || 3000,

    APP_URL: process.env.APP_URL,

});