const db = require('./connection');

const userModel = {
getAllUser: async () => {
    const query = `SELECT * FROM users 
    ORDER BY ASC`;
    const [getUser] = await db.query(query);
    return getUser;
  },
};

module.exports = userModel;