import InfoController from '../../../src/controllers/info-controller';
import Informacoes from '../../../src/models/informacoes';

describe('Controllers: info-controller.js', () => {

    const infoController = new InfoController();
    
    before((done) => {
        done();
    });

    after(done => {
        td.reset();
        done();
    });

    describe('Recupera informações do sistema', () => {
        
        it('Deve recupear as informações do sistema', () => {
            td.replace(Informacoes, 'find');
            const mock = { nome: 'api-template', versao: '1' };
            td.when(Informacoes.find({})).thenResolve(mock);
            const experado = { nome: 'api-template', versao: '1' };
            infoController.info(resposta => {
                expect(experado).to.be.eql(resposta);
            });
            
        });
    });
    
});