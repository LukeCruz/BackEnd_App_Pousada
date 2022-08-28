const express = require('express');

const userController = require('../controllers/userControllers')

const routes = express.Router();

routes.get( "/test", userController.getStatusTest );
routes.get( "/users", userController.getAllUser );
routes.get( "/:id", userController.getUser);
routes.post( '/users', userController.insert);

module.exports = routes;