const express = require('express');
const app = express();
const homeRoutes = require('./routes/home');
const listaRoutes = require("./routes/lista.js");
const carritoRoutes = require("./routes/carrito.js");
const registerRouter = require("./routes/register");
const session = require("express-session");

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(session({secret: "Secreto"}));



app.listen(3000, function() {
    console.log('-----------------------No error is running on 3000---------------------');
    console.log('<------------------------------------------------------------------------->');
    console.log("Esta parte de mi vida, este pequeño momento de mi vida lo llamo felicidad.");
  
})

app.use('/', homeRoutes);
app.use("/lista", listaRoutes);
app.use("/carrito", carritoRoutes);
app.use('/register', registerRouter);
