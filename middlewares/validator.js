const { body } = require('express-validator');
const path = require('path');
const bcrypt = require('bcryptjs');

// Middlewares propios

const json = require('../models/jsonModel');
const User = json('users');

module.exports = {
  register: [
    //Username
    body("username")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => {
        const user = User.findBySomething((user) => user.username == value);

        return !user;
      })
      .withMessage("Usuario registrado"),
    // Email
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .isEmail()
      .withMessage("Debes ingresar un email válido")
      .bail()
      .custom((value) => {
        const user = User.findBySomething((user) => user.email === value);

        return !user;
      })
      .withMessage("Email registrado"),
    // Image
    body("image")
      .custom((value, { req }) => {
        if (req.file) {
          return true;
        } else {
          return false;
        }
      })
      .withMessage("Imagen obligatoria")
      .bail()
      .custom((value, { req }) => {
        if (req.file) {
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
      .withMessage("Campo obligatorio")
      .bail()
      .isLength({ min: 3 })
      .withMessage("La contraseña debe tener al menos 3 carácteres"),
    // Retype password
    body("retype")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => req.body.password === value)
      .withMessage("Las contraseñas no coinciden"),
  ],
  login: [
    body("email")
      .notEmpty()
      .withMessage("Campo obligatorio")
      .bail()
      .custom((value, { req }) => {
        const user = User.findBySomething((user) => user.email == value);

        if (user) {
          return bcrypt.compareSync(req.body.password, user.password);
        } else {
          return false;
        }
      })
      .withMessage("Email o contraseña inválidos"),
    body("password").notEmpty().withMessage("Campo obligatorio"),
  ],
};
