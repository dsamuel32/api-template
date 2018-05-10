import Usuario from '../models/usuario';

class UsuarioController {
 
    save(dados, callback) {
        const usuario = new Usuario(dados);
        usuario.save(error => {
            if (!error) {                
                callback({mensagem: 'Registro Salvo Com Sucesso!!!'});
            }
        })
    }

}

export default UsuarioController;
