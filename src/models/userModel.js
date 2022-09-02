const db = require('./connection');

const userModel = {
  getAllUser: async () => {
    const query = 'SELECT name,email FROM users;';
    const [getUser] = await db.query(query);
    return getUser;
  },

  getUserById: async (id) => {
    const query = 'SELECT name FROM users WHERE id =?;';
    const [getUserById] = await db.execute(query, [id]);
    return getUserById;
  },

  insert: async (user) => {
    const query = 'INSERT INTO users (name) VALUES(?);';
    const [insertInto] = await db.query(query, [user]);
    const { insertId } = insertInto;
    const result = { id: insertId, name: user };
    return result;
  },
};

module.exports = userModel;
