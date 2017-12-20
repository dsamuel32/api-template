export default class UserController {

    constructor(Users) {
        this.Users = Users;
    }

    findById = id => this.Users.findById(id, { atributes: ['id', 'name', 'email'] });

    delete = id => this.Users.destroy({ where: { id } });

    save = user => this.Users.create(user);

    isPassword = (encodedPassword, password) => this.Users.prototype.isPassword(encodedPassword, password);

    findOne = email => this.Users.findOne({ where: { email } });
    
}
