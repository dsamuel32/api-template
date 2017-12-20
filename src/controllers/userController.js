export default class UserController {

    constructor(Users) {
        this.Users = Users;
    }

    findById = Users.findById(id, { atributes: ['id', 'name', 'email'] });

    delete = id => Users.destroy({ where: { id } });

    save = user => Users.create(user);

    isPassword = (encodedPassword, password) => Users.prototype.isPassword(encodedPassword, password);

    findOne = email => Users.findOne({ where: { email } });
    
}
