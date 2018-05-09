import { Mockgoose } from 'mockgoose';
import sinon from 'sinon';
import mongoose from 'mongoose';
import sinonMongoose from 'sinon-mongoose';

import UsuarioController from '../../../controllers/usuarioController';
import usuario from '../../../models/usuario';

describe('Routers: usuarioRoute.js', () => {

    let mockgoose = new Mockgoose(mongoose);
    
    before((done) => {
        done();
    });

    describe('Salva Usuario', () => {

        it('Deve retornar salvar o usuario', (done) => {
            
            const app = {models: {usuario: user}};
            const expectedResult = { status: true };           


            const usuarioController = new UsuarioController(app);
            usuarioController.save({nome: 'teste', email: 'teste'}, (error) => {
                expect(true).to.be.eql(!error);
                done();
            });
        });
    });
});
