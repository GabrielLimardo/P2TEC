// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body, check } = require('express-validator');
const jsonModel = require('../models/jsonModel');
const usersModel = jsonModel('users');
const bcryptjs = require('bcryptjs');

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
        .isLength({ min: 4 })
        .withMessage('El campo contraseña debe tener al menos 4 caracteres')
        .custom((value, { req }) => {
            return value == req.body.retypepassword;
        }).withMessage('LAS CONTRASEÑAS NO COINCIDEN'),
    body('retypepassword')
        .notEmpty()
        .withMessage('El campo contraseña es obligatorio')
   

] ,registerController.store); 

router.get("/login", registerController.login);
router.post("/login", [
    check('email').isEmail().withMessage('Email invalido'),
    check('password').isLength({min: 4}).withMessage('La contraseña debe tener al menos 4 caracteres'),
    body("email").custom(function(value, {req}){
        const user = usersModel.findBySomething(user => user.email == value);
        
        if(user){
            var result = bcrypt.compareSync(req.body.password, user.password);
            if (result) {
                  return true
            } else {
                return false
     
            }
        } else {
            return false
        }
        
    }).withMessage('Usuario o contraseña inválidos.'),

   
] ,registerController.processLogin);

module.exports = router;