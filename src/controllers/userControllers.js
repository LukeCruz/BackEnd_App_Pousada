const userService = require('../services/userService');



const userController = {

getStatusTest: (_req, res) => {
        const data = {
           message: 'rota get de teste funcionando',
           status: 'Api rodando e pc pegando fogo'

        } 
        return res.status(200).json(data);
 },
getAllUser: async (_req, res) => { 
    const getUser = await userService.getAllUser();

    if (!getUser | getUser.length === 0) {
        return res.status(Number(process.env.STATUS_CODE_NOT_FOUND)).json({message:"Not Found Error"})
    } return res.status(Number(process.env.STATUS_CODE_OK)).json(getUser);

  },
getUser: async (req, res, next) => {
  try {
    
    const { id } = req.params;
    const getUserById = userService.getUserById(id);
 
    if (!getUserById | getUserById.length === 0) {
     return res.status(Number(process.env.STATUS_CODE_NOT_FOUND)).json({message:"Not Found User"})
 } return res.status(Number(process.env.STATUS_CODE_OK)).json(getUserById);
 
 } catch (error) {
    next(error);
  }
},
insert: async (req, res) => {
  const {name, email, telefone} = req.body;
  const insertInto = userService.insert();

  if(!name) { res.status(500).json({message: "Insira seu nome!"})
}
  if(!email) { res.status(500).json({message: "Insira seu email!"})
}
  if(!telefone) { res.status(500).json({message: "Insira seu telefone!"})
}
   return res.status(204).json(insertInto);

 }
};

   module.exports = userController;