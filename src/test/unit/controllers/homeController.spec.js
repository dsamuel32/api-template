import HomeController from '../../../controllers/homeController';

describe('Routers: index.js', () => {
    describe('Exibe informações da pagina home', () => {
        it('Deve retornar { page: \'HOME API\' }', () => {
            const app = {};

            const expectedResponse = { page: 'HOME API' };
            const homeController = new HomeController(app);
            expect(homeController.info()).to.be.eql(expectedResponse);
        });
    });
});
