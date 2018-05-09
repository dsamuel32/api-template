import https from 'https';
import fs from 'fs';

module.exports = (app) => {
    if (process.env.NODE_ENV !== 'test') {
        const credentials = {
            key: fs.readFileSync('certificate/api.key', 'utf8'),
            cert: fs.readFileSync('certificate/api.cert', 'utf8'),
        };

        https.createServer(credentials, app).listen(app.get('port'), () => {
            console.info(`Server - porta ${app.get('port')}`);
        });
    }
};
