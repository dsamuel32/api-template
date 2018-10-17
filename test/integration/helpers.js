import supertest from 'supertest';
import chai from 'chai';
import informacoes from '../../src/routes/informacoes'
import configExpress from '../../src/config/config-express'

const routes = [informacoes];
const app = configExpress(routes);

global.app = app;
global.request = supertest(global.app);
global.expect = chai.expect;