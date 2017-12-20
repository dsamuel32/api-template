import https from 'https';
import fs from 'fs';

export default (app) => {
    if (process.env.NODE_ENV !== 'test') {
        const credentials = {
            key: fs.readFileSync('api.key', 'utf8'),
            cert: fs.readFileSync('api.cert', 'utf8'),
        };

        https.createServer(credentials, app)
            .listen(app.get('port'), () => {
            console.log(`Entrega API - porta ${app.get('port')}`);
        });
    }
};
