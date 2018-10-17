import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import Logger from './logger';
import db from './db';
import swaggerDocument from '../../public/apidoc/swagger.json';

function configExpress(routes) {
    const app = express();    
    db();
    
    _serverConfig(app);
    _configRequests(app); 
    _swaggerConfig(app);
    _registrarRotas(routes, app);

    return app;
}

function _serverConfig(app) {
    const logger = new Logger();
    app.set('port', 8080);    
    app.use(logger.logar());
    app.use(express.static('public'));
}

function _configRequests(app) {
    app.set('json spaces', 4);
    app.use(cors({
        origin: ['http://localhost:8080'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'image/*'],
    }));
    app.use(helmet());
    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });
}

function _registrarRotas(routes, app) {
    for (let route of routes) route(app);
}

function _swaggerConfig(app) {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

export default configExpress;