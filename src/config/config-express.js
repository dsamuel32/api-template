import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import compression from 'compression';
import helmet from 'helmet';
import Logger from './logger';

function configExpress (routes) {
    const app = express();
    const logger = new Logger();
    app.set('port', 8080);
    app.set('json spaces', 4);
    app.use(logger.logar());

    app.use(helmet());
    app.use(cors({
        origin: ['http://localhost:8080'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Authorization', 'image/*'],
    }));

    app.use(compression());
    app.use(bodyParser.json());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });

    app.use(express.static('public'));

    _registrarRotas

    _registrarRotas(routes, app)

    return app;
}

function _registrarRotas(routes, app) {
    for (let route of routes) route(app);
}

export default configExpress;