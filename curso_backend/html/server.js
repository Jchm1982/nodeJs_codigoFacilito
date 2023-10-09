const express = require('express');

const app = express();

//Indicar el uso de un motor de vistas, se utiliza el metodo SET del objeto app
app.set('view engine','ejs')

//despues de assets, es el tiempo de la cache
app.use('/public',express.static('assets',{
   etag:false,
   maxAge:'5h'
}
));

//Definimos la ruta inicial la que responda con un documento HTML
app.get('/',function(req,res){
   /*
   res.sendFile('index.html',{
      root:__dirname
   });
   //res.send(__dirname);
   */
  //Cuando el motor de vista ya esta configurado y hay vistas,se le debe de indicar a servidor web que debe responder con la vista a la peticion get que ya teniamos. Y se envia como argumento como cadena, con el nombre de la vista a mostrarse
  res.render('index');
});

app.listen(3000);

