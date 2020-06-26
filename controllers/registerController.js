const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
        create: function(req, res){
            return res.render('users/register');
        },
        store: function(req, res){
            let errors = validationResult(req);
            console.log(errors);
            //return res.send(errors);
            if(errors.isEmpty()){                 
                // let user = {
                //     id: "",
                //     username:req.body.username,
                //     email: req.body.email,
                //     password: bcryptjs.hashSync(req.body.password, 10),
                //     image:"???",
                // }
                // return res.send(req.file);
                delete req.body.retype;
                req.body.password = bcryptjs.hashSync(req.body.password, 10);

                let user = {
                    id: "",
                    ...req.body,
                    image: req.file.filename
                }
                usersModel.guardarUno(user);

                return res.redirect('/');
            } else {
                //Mandamos los mensajes de error al usuario
                console.log(errors.errors);
                // return res.send(errors.mapped()); //Debug
                return res.render('users/register', { errors : errors.mapped() })
            }
            
        }

}


module.exports = controller;