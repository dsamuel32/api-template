import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import compression from 'compression';
import helmet from 'helmet';
import Logger from './logger';
import db from './db'

function configExpress (routes) {
    const app = express();
    const logger = new Logger();
    db();
    app.set('port', 8080);
    app.set('json spaces', 4);
    app.use(logger.logar());
    
    _configRequests(app);    

    app.use(express.static('public'));

    _registrarRotas(routes, app)

    return app;
}

function _configRequests(app) {
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

export default configExpress;