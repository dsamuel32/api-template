import http from 'http';
import configApp from './config-app';

export default class Servidor {

    constructor() {
        this.app = configApp(); 
    }

    start() {  
        http.createServer(this.app).listen(this.app.get('port'), () => {
            console.info(`API - Porta ${this.app.get('port')}`);
        });
    }

}

