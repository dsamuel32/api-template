import express from 'express';
import consign from 'consign';

import boot from './server/boot'
import app from './app'

boot(app);



// https://github.com/sequelize/express-example/blob/master/models/index.js
