import supertest from 'supertest';
import chai from 'chai';
import configApp from '../../src/config/config-app';

const app = configApp();

global.app = app;
global.request = supertest(global.app);
global.expect = chai.expect;