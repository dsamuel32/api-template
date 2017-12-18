module.exports = {
    database: 'api-teste',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        logging: false,
        define: {
            underscore: true
        }
    },
    jwtSecret: "#teste-@AP1",
    jwtSession: {session: false}
};