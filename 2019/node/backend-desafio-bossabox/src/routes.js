const { Router } = require('express');

const routes = new Router();

const ToolController = require('./app/controllers/ToolController');

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

module.exports = routes;
