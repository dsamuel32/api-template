import express from 'express';
import consign from 'consign';

const app = express();

consign({ verbose: false, cwd: 'src' })
    .include('config/config.js')
    .then('config/db.js')
    .then('controllers')
    .then('seguranca/auth.js')
    .then('server/middlewares.js')
    .then('routes')
    .then('server/boot.js')
    .into(app);

module.exports = app;

// https://github.com/sequelize/express-example/blob/master/models/index.js
