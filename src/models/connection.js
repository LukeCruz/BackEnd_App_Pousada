// ESSE ARQUIVO DEPOIS VAMOS SUBISTITUIR PELO CONFIG/CONFIG.JSON 
// ELES FAZEM A MESMA COISA, QUE E PASSAR AS VARIAVEIS DE AMBIENTE DO .ENV PRO BANCO

const mysql = require('mysql2/promise');

const {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;

const connection = mysql.createPool({
  host: MYSQL_HOST,
  port: Number(MYSQL_PORT),
  user: MYSQL_USER,
  password: MYSQL_PASSWORD,
  database: MYSQL_DATABASE || 'db_development',
});

module.exports = connection;