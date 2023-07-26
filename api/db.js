import mysql from "mysql2"
//const mysql = require('mysql2')

export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "blog",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql Connected...');
});