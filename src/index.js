import express from 'express';
import consign from 'consign';

const app = express();

consign({ verbose: false, cwd: 'src' })
    .include('controllers')
    .then('utils')
    .then('server/middlewares.js')
    .then('routes')
    .then('server/boot.js')
    .into(app);

module.exports = app;
