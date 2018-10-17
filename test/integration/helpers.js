import supertest from 'supertest';
import chai from 'chai';
import info from '../../src/routes/info'
import configExpress from '../../src/config/config-express'

const routes = [info];
const app = configExpress(routes);

global.app = app;
global.request = supertest(global.app);
global.expect = chai.expect;