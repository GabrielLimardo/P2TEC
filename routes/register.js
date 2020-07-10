const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");

const registerController = require('../controllers/registerController');

const validator = require('../middlewares/validator');

// ************  Multer Config  ***************

var storage = multer.diskStorage({
   destination: function (req, file, cb) {
         cb(null, path.resolve(__dirname, '../public/img/users'))
   },
   filename: function (req, file, cb) {
         cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
   }
})

var upload = multer({
   storage: storage,

   // Validate image
   fileFilter: (req, file, cb) => {
      
      const acceptedExtensions = ['.jpg', '.jpeg', '.png'];

      const ext = path.extname(file.originalname);

      if (!acceptedExtensions.includes(ext)){
            req.file = file;
      }
         
      cb(null, acceptedExtensions.includes(ext));
   }
});

router.get('/', registerController.register);
router.post("/", upload.single('image'), validator.register, registerController.processRegister);
router.get("/login", registerController.login);
router.post("/login", validator.login, registerController.processLogin);
router.post('/logout', registerController.logout);

module.exports = router;