const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

// ACTIVAR SQL// const {user} = require("../database/models");

module.exports = {
  register: function (req, res) { //llega a registro
    return res.render("registro");
  },
  processRegister: function (req, res) {  // hace el registro
    const errors = validationResult(req); //constante que tiene la funcion validationResult de express-validator y toma como parametro el req
    if (errors.isEmpty()) {  //
      delete req.body.retype;  //borra la repeticion de contraseña
      req.body.password = bcrypt.hashSync(req.body.password, 10);
      db.User.create({
          username: req.body.username,
          email: req.body.email,
          password: req.body.password,
          image: req.file.filename,
          rol: 0
      }).then(() => {
        return res.redirect('./register/login');
      })
    } else {
      console.log("Error: " + JSON.stringify(errors.mapped()));
      const user = req.session.user;
      return res.render("registro", { errors: errors.mapped(), old: req.body, user});
    }
  },
  login: function (req, res) {
    return res.render("login");
  },
  processLogin: function (req, res) {
    const errors = validationResult(req);

    if(errors.isEmpty()){
      // LOGUEO AL USUARIO ETC
      return db.User.findOne({ where: { email: req.body.email } }).then(
        user => { 
          delete user.password;

          req.session.user = user; // YA ESTÁ EN SESION
    
          if (req.body.remember) { //si toco el campo remember que se encuentra en body 
            // Creo la cookie
    
            res.cookie('email', user.email, { 
              maxAge: 1000 * 60 * 60 * 24 
            }); // guardo solamente el email, donde tenga el email y el tiempo que quedara guardado
    
          }
          return Promise.resolve(user); 
        }).then(() => {return res.redirect('/');})

      

    } else {
        
      // return res.send(errors);

      return res.render("login", { errors: errors.mapped(), old: req.body});
    }



  },
  logout: function(req, res) {
    // Desloguear al usuario

    req.session.destroy(); //lo que esta en seccion usa la funcion destroy

    if(req.cookies.email){ //si hay algo en cookies 
      res.clearCookie('email'); //lo elimina
    }

    return res.redirect('/') 

  },
 

};
