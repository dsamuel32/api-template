module.exports = app => {

    const userController = app.controllers.userController;
    /**
    * @api {get} / API Status
    * @apiGroup Status
    * @apiSuccess {String} status Mensagem de status da API
    * @apiSuccessExample {json} Sucesso
    * HTTP/1.1 200 OK
    * {"status": "NTask API"}
    */
    app.get("/", (req, res) => {
        res.json({status: "HOME API"});
    });
  };