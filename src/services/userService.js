const userModel = require('../models/userModel');

const userService = {
    getAllUser: () => { 
        const getUser = userModel.getAllUser();
        return getUser
    }
};

module.exports = userService;