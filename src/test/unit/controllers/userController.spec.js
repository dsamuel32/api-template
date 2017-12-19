import userController from '../../../controllers/userController';
import app from '../../../index';
import SequelizeMock from 'sequelize-mock';

describe('Controllers: UserController',  () => {

    var DBConnectionMock = new SequelizeMock();
    
    describe('Recupera usuario por id: findById', () => {
        it('Deve retornar um usuario', () => {
          const Users = {
            findById: td.function()
          };

          td.when(app.config.db.sequelize).thenResolve(DBConnectionMock);

          const expectedResponse = [{id: 1,
                                     name: 'teste book',
                                     email: '2017-12-19T18:49:03.692Z'}];
          td.when(Users.findById({id: 1})).thenResolve(expectedResponse);
          
          return app.controllers.userController.findById(1)
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    
        });
      });

});