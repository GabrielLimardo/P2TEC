const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const controller = {
        create: function(req, res){
            return res.render('formulario');
        },
        store: function(req, res){
            // return res.send(req.body)
            let errors = validationResult(req);
            if(errors.isEmpty()){                 
                delete req.body.retypepassword;
                req.body.password = bcryptjs.hashSync(req.body.password, 10);

                let user = {
                    id: "",
                    ...req.body,
                }
                usersModel.guardarUno(user);

                return res.redirect('/');
            } else {
                //Mandamos los mensajes de error al usuario
                console.log(errors.errors);
                // return res.send(errors.mapped()); //Debug
                return res.render('formulario', { errors : errors.mapped() })
            }
            
        }

 }


module.exports = controller;