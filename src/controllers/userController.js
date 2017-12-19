module.exports = (app) => {
    const Users = app.config.db.models.Users;

    app.findById = id => Users.findById(id, { atributes: ['id', 'name', 'email'] });

    app.delete = id => Users.destroy({ where: { id } });

    app.save = user => Users.create(user);

    app.isPassword = (encodedPassword, password) => Users.prototype.isPassword(encodedPassword, password);

    app.findOne = email => Users.findOne({ where: { email } });

    return app;
};
