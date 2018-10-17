import fs from 'fs';
import winston from 'winston';
import morgan from 'morgan';


export default class Logger {

    constructor() {

        if (!fs.existsSync('logs')) {
            fs.mkdirSync('logs');
        }

        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                winston.format.prettyPrint(),
                winston.format.printf(info => {
                    return `${info.timestamp} [${info.level}] : ${JSON.stringify(info.message)}`;
                })
            ),
            transports: [
                new winston.transports.File({
                    level: 'info',
                    filename: 'logs/app.log',
                    maxsize: 1048576,
                    maxFiles: 10,
                    colorize: false
                })
            ]
        });
    }

    logar() {
        return morgan('common', {
            stream: {
                write: (message) => {
                    this.logger.info(message);
                },
            },
        });
    }

}