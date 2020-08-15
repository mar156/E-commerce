const express= require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/crear-cuenta', (req,res) =>{
    res.sendFile(__dirname + '/views/formulario-usuario.html');
});
app.get('/iniciar-sesion',(req,res) => {
    res.sendFile(__dirname + '/views/iniciar-sesion.html');
})

app.listen(3000, () => {console.log('El servidor funciona bien')});
