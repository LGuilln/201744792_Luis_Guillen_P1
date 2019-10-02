//imports (para el servidor) 
const express = require ('express');
const app = express();

//Configuarcion del Puerto 
app.set('port', 3000);

//rutas
app.get('/',(req,res) => {
res.send('<h1> Que pedo Erikkson</h1>')
})

app.get('/Hola',(req,res) => {
    res.send('<h1> Prueba N1</h1>')
    })
    

//Para escuchar el Puerto 
app.listen(app.get('port'),()=>{
    console.log('escuchando en el puerto ',app.get('port') );
});