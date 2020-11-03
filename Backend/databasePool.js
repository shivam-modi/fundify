const mysql = require('mysql');

const databaseConfig = require('./secrets/databaseConfiguration');

const pool = mysql.createPool(databaseConfig);

module.exports = pool;
// pool.connect((err) => {
//     if(err) throw err;
//     console.log("connected!");
// })