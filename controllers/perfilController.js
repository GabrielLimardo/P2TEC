const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;
const { validationResult } = require("express-validator");


const controller = {
	root: (req, res) => {
        const user = req.session.user;
    
        if (user) {
          return res.render('perfil', {user})  
      } else {
        return res.render('not-found', {user });
    }
    },
    //tiene que cargar la nueva informacion a la base de datos
    edit: (req, res) => {
      const errors = validationResult(req);
      if(errors.isEmpty()){
        db.User.update({
          username: req.body.username,
          // email: req.body.email
        }, {where: {
          id: req.params.id
        }  

        })
        .then(()=>{
          db.User.findByPk(req.params.id).then(function(user){
            req.session.user = user
            return res.redirect("/perfil/" + req.params.id)
          })
        })
      } else {
        return res.render("perfil", { errors: errors.mapped(), old: req.body, user: req.session.user});
      }

    },
     controlarea: (req, res) => {
      const user = req.session.user;
        //tiene que mostrar los emails con su nivel de admin
        if (typeof user !== 'undefined' && user.rol === 1) {
      return res.render("panelcontro",{data: user})
    } else {
      return res.render('not-found', { user });
  }
    },
     //tengo que cargar la nueva informacion de roles
     updaterol: (req, res) => {
       
    },
     
     cambiarcontra: (req, res) => {
        const user = req.session.user;
        if (typeof user !== 'undefined') {
        return res.render("cambiarcontra",{user})
      } else {
        return res.render('not-found', { user });
    }
    },
      //tengo que cambiar la contraseña
      updatecontra: (req, res) => {
       
    }

};

module.exports = controller;