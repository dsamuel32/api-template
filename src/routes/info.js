import InfoController from '../controllers/info-controller'

export default (app) => {

    const infoController = new InfoController();

    app.get('/info', (req, res) => {
        res.json(infoController.info());
    });

}