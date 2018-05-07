module.exports = (app) => {
    const userController = app.controllers.homeController;

    app.get('/home', (req, res) => {
        res.json(userController.info());
    });
    
};
