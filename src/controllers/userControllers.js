const userService = require('../services/userService');

const userController = {

getStatusTest: (_req, res) => {
        const data = {
           message: 'rota get de teste funcionando',
           status: 'Api rodando e pc pegando fogo'

        } 
        return res.status(200).json(data);
 },
getUser: async (_req, res) => { 
    const getUser = await userService.getAllUser();

    if (!getUser | getUser.length === 0) {
        return res.status(STATUS_CODE_NOT_FOUND).json({message:"Not Found Error"})
    } return res.status(STATUS_CODE_OK).json(getUser);

  }
}

   module.exports = userController;