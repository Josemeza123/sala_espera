const { log } = require('console');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'prueba1',
})

connection.connect((err)=>{
    if(err) throw err
    console.log('conexion establecida exitosamente');
});

connection.end;