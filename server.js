const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');

const db = knex(knexConfig.development);
const server = express();

server.use(helmet());
server.use(express.json());

const actionsRouter = require('/routes/actionsRouter');
const projectsRouter = require('./routes/projectsRouter');

server.use('./projects', projectsRouter);
server.use('./actions', actionsRouter);


module.exports = server;