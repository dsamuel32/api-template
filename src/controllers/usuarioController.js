class UsuarioController {
    
    constructor(model) {
        this.model = model;
    }

    save(usuario, callback) {
        const u = this.model.usuario(usuario);
        u.save(error => {
            if (!error) {                
                callback({mensagem: 'Registro Salvo Com Sucesso!!!'});
            }
        })
    }
}

export default UsuarioController;
