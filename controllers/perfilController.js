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
        floor: req.body.Direccion2,
        address: req.body.Direccion,
        PostalCode: req.body.CodPostal,
        location: req.body.Localidad,
        Province: req.body.Provincia,
        email:req.body.email
       }, {where: {
        id: req.params.id
       }  

      })
        .then(()=>{
          db.User.findByPk(req.params.id).then(function(user){
            req.session.user = user
            return res.redirect("/perfil/perfil/" + req.params.id)
          })
        })
      } else {
       //no esta tirando los errores
        return res.render("perfil", { errors: errors.mapped(), old: req.body, user: req.session.user});
      }

    },
     controlarea: (req, res) => {
      const user = req.session.user;
      if (typeof user !== 'undefined' && user.rol === 1) {
          // Do the magic
          db.User.findAll({
            include: {
                all: true,
                nested: true
              }
        })
            .then(function (results) {
                const UserAll = results;
                return res.render("paneldecontrol", { data: UserAll, user })
            })
            .catch(e => console.log(e))
             
      } else {
          return res.render('not-found', { user });
      }
    },
     //tengo que cargar la nueva informacion de roles
     updaterol: (req, res) => {
       
    },
     
    editpas: (req, res) => {
      const user = req.session.user;
    
      if (user) {
        return res.render('cambiarcontra', {user})  
    } else {
      return res.render('not-found', {user });
    }
    
    },
      //tengo que cambiar la contraseña
      updatecontra: (req, res) => {
        let errors = validationResult(req);
        if (errors.isEmpty()){
          db.User.findByPk(req.params.id)
          .then(function(user){
            return db.User.update ({
              password: req.body.newPassword != "" ? bcryptjs.hashSync(req.body.newPassword, 10) : user.password
            }, {where: {
              id: req.params.id}
             })
             
           
          })
          .then(()=>{
            return res.redirect('/login'); 
          })
          
    
        } else{
          return res.send(errors.mapped())
          return res.render('password', {errors: errors.mapped(), old: req.body} )
        }
    },
    
};

module.exports = controller;