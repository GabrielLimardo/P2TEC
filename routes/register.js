// ************ Require's ************
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const { body } = require('express-validator');

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
        .isLength({ min: 2 })
        .withMessage('El campo contraseña debe tener al menos 4 caracteres')
        .custom((value, { req }) => {
            return value == req.body.retypepassword;
        }).withMessage('LAS CONTRASEÑAS NO COINCIDEN'),
    body('retypepassword')
        .notEmpty()
        .withMessage('El campo contraseña es obligatorio')
   

] ,registerController.store); 


module.exports = router;