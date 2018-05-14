import UsuarioController from '../controllers/usuarioController';

module.exports = (app) => {
    
    const usuarioController = new UsuarioController();

    app.post('/usuario/salvar', (req, res) => {
        usuarioController.save(req.body, result => {
            res.json(result);
        });       
    });
    
};
