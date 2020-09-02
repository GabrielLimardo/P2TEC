const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');
const db = require("../database/models");

// Middlewares propios

const json = require('../models/jsonModel');
const User = json('users');

module.exports = {
  register: [
    //Username
    body("username")
      .notEmpty()
      .withMessage("El campo username obligatorio")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({ where: { username: value } }).then(
          user => {
            return user ? Promise.reject("Nombre de usuario ya utilizado") : Promise.resolve();
          }
        )
      })
      .withMessage("Usuario registrado"),
    // Email
    body("email")
      .notEmpty()
      .withMessage("El campo email es obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value) => {
        return db.User.findOne({ where: { email: value } }).then(
          user => {
            return user ? Promise.reject("Email ya utilizado") : Promise.resolve();
          }
        )
      })
      .withMessage("Email ya utilizado"),
    // Image
    body("image")
      .custom((value, { req }) => {
       
        return true;
        //return req.file
      })
      .withMessage("Imagen obligatoria")
      .bail()
      .custom((value, { req }) => {
        if (req.file) {
          return true;
          const acceptedExtensions = [".jpg", ".jpeg", ".png"];

          const ext = path.extname(req.file.originalname);

          if (acceptedExtensions.includes(ext)) {
            return true;
          } else {
            return false;
          }
        } else {
          return true;
        }
      })
      .withMessage("Extension invalida"),
    // Password
    body("password")
      .notEmpty()
      .withMessage("El campo contraseña es obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener al menos 3 carácteres"),
    // Retype password
    body("retype")
      .notEmpty()
      .withMessage("El campo reescribir contraseña es obligatorio")
      .bail()
      .custom((value, { req }) => req.body.password === value)
      .withMessage("Las contraseñas no coinciden"),
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("El campo  email es obligatorio")
      .bail()
      .custom((value, { req }) => {
        return db.User.findOne({ where: { email: value } }).then(
          user => {
            if (user) {
              if (bcrypt.compareSync(req.body.password, user.password)) {
                return Promise.resolve();
              }
            }
            return Promise.reject("Email o contraseña invalidos");
          }
        )
      })
      .withMessage("Email o contraseña inválidos"),
    body("password").notEmpty().withMessage("Campo obligatorio")
  ],
  addToCart: [
    body("quantity")
      .custom((value) => value > 0)
      .withMessage("Debe agregar al menos 1 producto al carrito"),
  ],
  password: [

    body("currentPassword")
      .notEmpty()
      .withMessage("Ingrese su contrasenia actual para cambiarla")
      .bail()
      .custom((value, {req}) => {
        return db.Users.findByPk(req.session.user.id)
        .then(function(user){
          if(!bcryptjs.compareSync(req.body.currentPassword, user.password)){
            return Promise.reject('Contrasenia invalida')
          }
        })
      }),

    body("newPassword") // Deberiamos ver otra manera de crear una dependencia entre el campo newP con el campo currentP
      .notEmpty()
      .withMessage('Ingrese su nueva contrasenia')
      .bail()
      .isLength({ min: 8 })
      .withMessage("La contraseña debe tener como mínimo 8 caracteres")         
      

      // Validador
      // Preguntar si el primer campo coincide con la contraseña de la DB

      // Preguntar si las contraseñas nuevas coinciden


      // Controlador
      // Hasheas la password
      // Update de tu usuario donde coincida el email con el que está en sesión. Updateas la password
      
  ],
};

