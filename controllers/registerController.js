const json = require("../models/jsonModel");
const User = json("users");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");

module.exports = {
  register: function (req, res) {
    return res.render("registro");
  },
  processRegister: function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      delete req.body.retype;
      req.body.password = bcrypt.hashSync(req.body.password, 10);

      User.guardarUno({
        ...req.body,
        image: req.image
      })

      return res.redirect('./register/login');
    } else {
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
    
      let user = User.findBySomething(user => user.email == req.body.email);

      delete user.password;

      req.session.user = user; // YA ESTÁ EN SESION

      if (req.body.remember) {
        // Creo la cookie

        res.cookie('email', user.email, { maxAge: 1000 * 60 * 60 * 24 });

      }

      return res.redirect('/');

    } else {
        
      // return res.send(errors);

      return res.render("login", { errors: errors.mapped(), old: req.body});
    }



  },
  logout: function(req, res) {
    // Desloguear al usuario

    req.session.destroy();

    if(req.cookies.email){
      res.clearCookie('email');
    }

    return res.redirect('/')

  }

};
