import Usuario from '../models/usuario';

class UsuarioController {

    save(dados, callback) {
        Usuario.create(dados).then(resposta => {
            if (resposta) {
                callback({mensagem: 'Registro Salvo Com Sucesso!!!'})
            }            
        });
    }

}

export default UsuarioController;
