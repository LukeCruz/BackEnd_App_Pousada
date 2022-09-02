/* eslint-disable consistent-return */

const userService = require('../services/userService');
const { success, clientError } = require('../helpers/statusCode');

const userController = {

  getStatusTest: async (_req, res) => {
    const data = {
      message: 'rota get de teste funcionando',
      status: 'Api rodando e pc pegando fogo',
    };
    return res.status(success.OK).json(data);
  },

  getAllUser: async (_req, res) => {
    const getUser = await userService.getAllUser();
    if (!getUser || getUser.length === 0) {
      return res.status(Number(clientError.NOT_FOUND)).json({ message: 'Not Found Error' });
    } return res.status(Number(success.OK)).json(getUser);
  },

  getUser: async (req, res, next) => {
    try {
      const { id } = req.params;
      const getUserById = await userService.getUserById(id);
      if (!getUserById || getUserById.length === 0) {
        return res.status(Number(clientError.NOT_FOUND)).json({ message: 'Not Found User' });
      } return res.status(Number(success.OK)).json(getUserById);
    } catch (error) {
      next(error);
    }
  },

  insert: async (req, res) => {
    const { name } = req.body;
    const insertInto = userService.insert();

    if (!name) {
      res.status(500).json({ message: 'Insira seu nome!' });
    }
    return res.status(success.NO_CONTENT).json(insertInto);
  },
};

module.exports = userController;
