import mongoose from 'mongoose';


export default () => {
    mongoose.Promise = global.Promise;
    let host = '192.168.99.100';
    let dataBase = 'api-dev';

    if (process.env.NODE_ENV === 'test') {
        dataBase = 'api-test';
    } else if (process.env.NODE_ENV === 'production') {
        dataBase = 'api'
    }
    const url = `mongodb://${host}/${dataBase}`;

    mongoose.connect(url);

}