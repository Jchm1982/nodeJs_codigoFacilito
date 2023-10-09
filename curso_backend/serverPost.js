const express =require('express');
const bodyParser =require('body-parser');

const app = express();

//usano el obj de app de express solicitamos que utulice el analizador de boydy-parser
app.use( bodyParser.urlencoded( {extended:true} ) );

app.post('/',function(req,res){
   res.send(`Hola ${req.body.name}`);
});

app.listen(3000);