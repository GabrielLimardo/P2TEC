const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {
	root: (req, res) => {
        const user = req.session.user;
        
        return res.render("pruebaperfil",{data: user})
    },
    //tiene que cargar la nueva informacion a la base de datos
    edit: (req, res) => {
        
    },
     controlarea: (req, res) => {
      const user = req.session.user;
        //tiene que mostrar los emails con su nivel de admin
      return res.render("panelcontro",{data: user})
    },
     //tengo que cargar la nueva informacion de roles
     updaterol: (req, res) => {
       
    },
     
     cambiarcontra: (req, res) => {
        const user = req.session.user;

        return res.render("cambiarcontra",{user})
    },
      //tengo que cambiar la contraseña
      updatecontra: (req, res) => {
       
    }

};

module.exports = controller;