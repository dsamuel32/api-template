import logger from './logger.js';

let config = {
    database: 'api',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        logging: (sql) => {
            logger.info(`[${new Date()}] ${sql}`);
        },
        define: {
            underscore: true,
        },
    },
    jwtSecret: 'Nta$K-AP1',
    jwtSession: { session: false },
};

export default config;
