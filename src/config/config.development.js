import logger from './logger.js';

module.exports = {
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
