import express from "express";
import consign from "consign";

const app = express();

consign({verbose: false, cwd: 'src'})
    .include("config/config.js")
    .then("config/bd.js")
    .then("seguranca/auth.js")
    .then("libs/middlewares.js")
    .then("controllers")
    .then("routes")
    .then("libs/boot.js")
    .into(app);

module.exports = app;