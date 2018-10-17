import InfoController from '../../../src/controllers/info-controller'

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
            const experado = { 'name': 'api-template', 'version': '0.0.1' };
            expect(experado).to.be.eql(infoController.info());
        });
    });
    
});