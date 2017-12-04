module.exports = {
    database: 'ntask',
    username: 'root',
    password: 'root',
    params: {
        dialect: 'mysql',
        logging: false,
        define: {
            underscore: true
        }
    },
    jwtSecret: "Nta$K-AP1",
    jwtSession: {session: false}
};