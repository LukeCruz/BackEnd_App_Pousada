const express = require('express');

const userController = require('../controllers/userControllers')

const routes = express.Router();

routes.get( "/test", userController.getStatusTest );
routes.get( "/", userController.getUser );

module.exports = routes;