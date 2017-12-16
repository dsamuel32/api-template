import bodyParser from "body-parser";
import express from "express";
import cors from "cors";
import morgan from "morgan";
import compression from "compression";
import helmet from "helmet";
import logger from "../config/logger";


module.exports = app => {

    const auth = app.seguranca.auth;

    app.set("port", 8080);
    app.set("json spaces", 4);
    app.use(morgan("common", {
        stream: {
            write: (message) => {
            logger.info(message);
            }
        }
    }));
    app.use(helmet());
    app.use(cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"]
    }));
    app.use(compression());
    app.use(bodyParser.json());
    app.use(auth.initialize());
    app.use((req, res, next) => {
        delete req.body.id;
        next();
    });

    app.use(express.static("public"));

};