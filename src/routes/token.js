import jwt from 'jwt-simple';

module.exports = (app) => {
    const cfg = app.config.config;
    const userController = app.controllers.userController;

    /**
     * @api {post} /token Token autenticado
    * @apiGroup Credencial
    * @apiParam {String} email Email de usuário
    * @apiParam {String} password Senha de usuário
    * @apiParamExample {json} Entrada
    * {
    * "email": "john@connor.net",
    * "password": "123456"
    * }
    * @apiSuccess {String} token Token de usuário autenticado
    * @apiSuccessExample {json} Sucesso
    * HTTP/1.1 200 OK
    * {"token": "xyz.abc.123.hgf"}
    * @apiErrorExample {json} Erro de autenticação
    * HTTP/1.1 401 Unauthorized
    */ 
    app.post('/token', (req, res) => {
        if (req.body.email && req.body.password) {
            const email = req.body.email;
            const password = req.body.password;

            userController.findOne(email)
            .then((user) => {
                if (userController.isPassword(user.password, password)) {
                    const payload = { id: user.id };
                    res.json({ success: true, token: `Bearer ${jwt.encode(payload, cfg.jwtSecret)}` });
                } else {
                    res.sendStatus(401);
                }
            })
            .catch((error) => {
                console.log(error);
                res.sendStatus(401);
            });
        } else {
            res.sendStatus(401);
        }
    });
};
