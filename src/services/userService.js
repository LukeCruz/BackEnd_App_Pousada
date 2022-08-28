const userModel = require('../models/userModel');

const userService = {
    getAllUser: async () => { 
        const getUser = await userModel.getAllUser();
        return getUser
    },
    getUserById: async (id) => { 
        const getUserById = await userModel.getUserById(id);
        return getUserById;
    },
    insert: async (user) => {
        const insertInto = await userModel.insert(user); 
        return insertInto;
    }
};

module.exports = userService;