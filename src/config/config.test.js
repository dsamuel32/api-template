let config = {
    database: 'api-teste',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        logging: false,
        define: {
            underscore: true,
        },
    },
    jwtSecret: 'teste',
    jwtSession: { session: false },
};

export default config;
