// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator');
const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');

// ************ Controller Require ************
const registerController = require('../controllers/registerController');
const { dirname } = require('path');

// Multer config
let storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now()+path.extname(file.originalname))
    }
})

let upload = multer({ storage: storage })


router.get('/', registerController.create); 
router.post('/', [
    body('email')
        .notEmpty()
        .withMessage('El campo email es obligatorio'),
    body('password')
        .notEmpty()
        .withMessage('El campo contraseña es obligatorio')
        .bail()
        .isLength({ min: 8 })
        .withMessage('El campo contraseña debe tener al menos 8 caracteres')
        .custom((value, { req }) => {
            return value == req.body.retypepassword;
        }).withMessage('LAS CONTRASEÑAS NO COINCIDEN'),
    body('retypepassword')
        .notEmpty()
        .withMessage('El campo contraseña es obligatorio')
   

] ,registerController.store); 

router.get("/login", registerController.login);
router.post("/login", [
    check('email').isEmail().withMessage('Email invalido')
    check('password').isLength({min: 8}).withMessage('La contraseña debe tener al menos 8 caracteres')
    body("email").custom(function(value){
        const register = usersModel.leerJson()
        for (let i = 0; i < register.length; i++) {
            if(register[i].email == value){
                return false
            };
            
        }
        return true

    }).withMessage('Usuario o contraseña inválidos.'),

    // custom: email y contrasenia coinciden
    /* body('email').custom((value, { req }) => { */
        //Leer JSON

       /*  return email == compareSync(req.body.password - user.password); */
        //if (users[i].email = value) {
        //    return false
        // } else {
        //    return true
        //}
   
        // jsonModel de usuarios buscar un usuario por emai (value, o en el obj req) compareSync req.body.password - user.password
        // si no es correcto devuelve un msj de error "email o contrasenia invalidas"
] ,registerController.processLogin);



module.exports = router;