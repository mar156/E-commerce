const express= require('express');
const app = express();
const productRoutes = require('./routes/products/products');

app.use(express.static('public'));

/// RUTA MAIN
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'views/index');
});

// RUTA PRODUCTS
app.get('/products', productRoutes);


//RUTA USUARIOS
app.get('/crear-cuenta', (req,res) =>{
    res.sendFile(__dirname + '/views/formulario-usuario.html');
});
app.get('/iniciar-sesion',(req,res) => {
    res.sendFile(__dirname + '/views/iniciar-sesion.html');
})


app.listen(3000, () => {console.log('El servidor funciona bien')});
