import dev from './config.development'
import test from './config.test'

const env = process.env.NODE_ENV;

export default class Config {
   
    getConfig() {
        if (env) {
            return test;
            // return require(`./config.${env}.js`);
        }
        return dev;
    }

}

