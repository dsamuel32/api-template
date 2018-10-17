import http from 'http';
import configExpress from './config-express';

export default class Servidor {

    constructor(routes) {
        this.app = configExpress(routes); 
    }

    start() {  
        http.createServer(this.app).listen(this.app.get('port'), () => {
            console.info(`API - Porta ${this.app.get('port')}`);
        });
    }

}

