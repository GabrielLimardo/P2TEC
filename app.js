const express = require('express');
const app = express();
var cookieParser = require('cookie-parser');
const homeRoutes = require('./routes/home');
const listaRoutes = require("./routes/lista.js");
const carritoRoutes = require("./routes/carrito.js");
const registerRoutes = require("./routes/register");
const pruebaRoutes = require("./routes/prueba");
const perfilRoutes = require("./routes/perfil");
const session = require("express-session");
const apiInfoRouter = require('./routes/api/apiInfo');
const apiUsersRouter = require('./routes/api/apiUsers');
const apiCategoriesRouter = require('./routes/api/apiCategories');
const apiProductsRouter = require('./routes/api/apiProducts');
const cors = require('cors');


app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public')); 
app.use(session({secret: 'miapp'}));
app.use(express.urlencoded({ extended: false}))
app.use(express.json());
app.use(cookieParser());
app.use(cors());




app.listen(3030, function() {
    console.log('-----------------------No error is running on 3030---------------------');
    console.log('<------------------------------------------------------------------------->');
    console.log("Esta parte de mi vida, este pequeño momento de mi vida lo llamo felicidad.");
  
})

app.use('/', homeRoutes);
app.use("/lista", listaRoutes);
app.use("/carrito", carritoRoutes);
app.use('/register', registerRoutes);
app.use("/prueba", pruebaRoutes);
app.use("/perfil", perfilRoutes);
app.use('/api/info', apiInfoRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);
app.use('/api/categories', apiCategoriesRouter);