module.exports = app => {

    app.save = (usuario, callback) => {
        const Usuario = new app.models.usuario(usuario);
        Usuario.save(error => {
            if (!error) {
                callback({mensagem: 'Registro Salvo Com Sucesso!!!'});
            }
        });
    };

    return app;

}
