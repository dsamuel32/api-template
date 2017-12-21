import express from 'express';
import config from './config/config';
import datasource from './config/db';
import bodyParser from 'body-parser';
import users from './routes/users';
import token from './routes/token';
import index from './routes/index';

import middlewares from './server/middlewares'

const app = express();

app.config = new config().getConfig();

app.datasource = datasource(app);

middlewares(app);

const Users = app.datasource.models.Users;

index(app);
token(app);
users(app);

export default app;