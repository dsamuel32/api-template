import HomeController from '../controllers/homeController';

module.exports = (app) => {
    const homeController = new HomeController();
    app.get('/home', (req, res) => {
        res.json(homeController.info());
    });
    
};
