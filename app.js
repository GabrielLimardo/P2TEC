const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const listaRoutes = require("./routes/lista.js");
const formularioRoutes = require('./routes/formulario.js');
const carritoRoutes = require("./routes/carrito.js");


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));



app.listen(3000, function(){
    console.log('Running on 3000');
})

app.use('/', homeRoutes);
app.use("/lista", listaRoutes);
app.use("/formulario", formularioRoutes);
app.use("/carrito", carritoRoutes);
