const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {
	root: (req, res) => {
        const user = req.session.user;

        if (typeof user !== 'undefined') {
        return res.render("perfil", {user})

      } else {
        return res.render('not-found', {user });
    }
    },
    //tiene que cargar la nueva informacion a la base de datos
    edit: (req, res) => {
        
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