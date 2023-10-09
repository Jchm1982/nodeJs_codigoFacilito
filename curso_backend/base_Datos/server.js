const express = require('express');
const sqlite3 = require('sqlite3');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

//obtenes el obj app
const app = express();

app.use(bodyParser.urlencoded({extended:true}));

//Se crea la BD
//let db = new sqlite3.Database('proyecto-backend');

const sequelize= new Sequelize('proyecto-backend',null,null,{
   dialect: 'sqlite',
   storage:'./proyecto-backend'
});//Sequelize recibe de 3 a 4 argumentos,base de datos,usuario,contraseña

//se comenta ya que se creo la BD una sola vez
//db.run('CREATE TABLE tasks(id int AUTO_INCREMENT,descripion varchar(250))');

//definimos la ruta
app.post('/pendientes',function(req,res){
   //db.run(`INSERT INTO tasks (descripion) VALUES(?)`,req.body.description);
   res.send('Insert Finalizada');
});




//A la escucha de nuestro Puerto
app.listen(3000);
/*
//Con el objeto process se escuchan los mensajes externos, y ejecutamos codigo acorde
SIGINT->Es el proceso que se escucha cuando se envia CTRL+C
*/
/*
process.on('SIGINT',function(){
   console.log('El Servidor ha sido cerrado');

   //Instruccion de cierre de la conexion para evitar fugas de memoria que puedan afectar el rendimiento de la PC
   db.close();
   //process.exit()-> permite cerrar el servidor de NODE independientemente de donde se ejecute
   process.exit();
});
*/