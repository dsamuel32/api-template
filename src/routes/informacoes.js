import InfoController from '../controllers/info-controller'

export default (app) => {

    const infoController = new InfoController();

    app.get('/informacoes', (req, res) => {
        infoController.info(resposta => {
            res.json(resposta);
        })        
    });

}