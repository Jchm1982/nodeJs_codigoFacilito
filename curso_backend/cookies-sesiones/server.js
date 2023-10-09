//importamos Express
const express = require('express');
//para configurar las cookies session, se debe importar
const CookieSession = require('cookie-session');
const cookieSession = require('cookie-session');


//Generamos el objeto app
const app = express();
//El manejador de cookkieSession tambien es un midelware,que se encarga de encriptar las cookies para que se guarden en el navegador, de extraerlas en cada peticion HTTP, y de desencriptarlas para que se puedan manejar.
app.use(cookieSession({
   name:'galletina',
   keys:['asvsdbfyfb563hfyrbry','13423hdyeryfbksjii98']
   //keys:['aquiSeColocaLoQueNecesitas','yEsComoFirmarLasCookies']
}));

app.get('/',function(req,res){
   req.session.visits = req.session.visits || 0;

   
   req.session.visits= req.session.visits+1;

   res.send(`${req.session.visits} visita(s)`);
})

//Ponemos a la escucha el puerto
app.listen(3000);