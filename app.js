const express= require('express');
const app = express();
const productRoutes = require('./routes/products/productRoutes');
const mainRoutes = require('./routes/main/mainRoutes');
const usersRoutes = require('./routes/users/usersRoutes');

app.set( 'view engine', 'ejs');
app.use(express.static('public'));

/// RUTA MAIN
app.use('/', mainRoutes);

// RUTA PRODUCTS
app.use('/products', productRoutes);

//RUTA USUARIOS
app.use('/users', usersRoutes)

//PUERTO

app.listen(3000, () => {console.log('El servidor funciona bien')});
