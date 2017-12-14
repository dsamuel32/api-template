module.exports = app => {

    const Users = app.config.db.models.Users;

    app.findById = id => {
        return Users.findById(req.user.id, {atributes: ["id", "name", "email"]});
    }

    app.delete = id => {
        return Users.destroy({where: {id: id} });
    }

    app.save = user => {
        return Users.create(user);
    }

    return app;
    
}