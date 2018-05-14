import { Mockgoose } from 'mockgoose';
import sinon from 'sinon';
import mongoose from 'mongoose';
import sinonMongoose from 'sinon-mongoose';

import UsuarioController from '../../../controllers/usuarioController';
import Usuario from '../../../models/usuario';

describe('Routers: usuarioRoute.js', () => {

    let mockgoose = new Mockgoose(mongoose);
    const usuarioController = new UsuarioController();
    
    before((done) => {
        done();
    });

    after(done => {
        td.reset();
        done();
    });

    describe('Salva Usuario', () => {

        it('Deve retornar usuario salvo', () => {
            td.replace(Usuario, 'create');
            const dados = { nome: 'teste', email: 'teste@teste.com' };
            const expected = { 'mensagem': 'Registro Salvo Com Sucesso!!!' };

            td.when(Usuario.create(dados)).thenResolve(dados);
            
            usuarioController.save(dados, (resposta) => {
                expected(expected).to.be.eql(resposta);
            });
        });
    });
});
