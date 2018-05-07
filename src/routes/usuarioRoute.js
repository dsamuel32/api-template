module.exports = (app) => {
    const usuarioController = app.controllers.usuarioController;

    app.post('/usuario/salvar', (req, res) => {
        usuarioController.save(req.body, result => {
            res.json(result);
        });       
    });
    
};
