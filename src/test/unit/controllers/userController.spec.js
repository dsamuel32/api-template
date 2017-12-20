import UserController from '../../../controllers/userController';

import SequelizeMock from 'sequelize-mock';

describe('Controllers: UserController',  () => {
        
    describe('Recupera usuario por id: findById', () => {
        it('Deve retornar um usuario', () => {
          const Users = {
            findById: td.function()
          };

          const expectedResponse = [{id: 1,
                                     name: 'teste book',
                                     email: '2017-12-19T18:49:03.692Z'}];
          td.when(Users.findById({id: 1})).thenResolve(expectedResponse);

          const userController = new UserController(Users);
          console.log(userController.findById(1))
          return userController.findById(1)
            .then(response => expect(response.data).to.be.eql(expectedResponse));
    
        });
      });

});