const express = require("express")
const router = express.Router();
const multer = require("multer");
const path = require("path");

const listaController = require("../controllers/listaController")

const validator = require('../middlewares/validator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
          cb(null, path.resolve(__dirname, '../public/img'))
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
 
router.get("/", listaController.root);
router.get('/detail/:productId/', listaController.detail);
router.get('/create', listaController.create); /* GET - Form to create */
router.post('/create', upload.single('image'), validator.register, listaController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:id', listaController.edit); /* GET - Form to create */
router.post('/edit/:id', listaController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.post('/delete/:id', listaController.destroy);

router.get('/Componentes', listaController.Componentes);
router.get('/Notebooks', listaController.Notebooks);
router.get('/Monitores', listaController.Monitores);
router.get('/Perifericos', listaController.Perifericos);
router.get('/PcOffice', listaController.PcOffice);
router.get('/PcStreamer', listaController.PcStreamer);
router.get('/PcDiseno', listaController.PcDiseno);



router.get('/aorus', listaController.Aorus);
router.get('/asus', listaController.Asus);
router.get('/adata', listaController.AData);
router.get('/seagate', listaController.Seagate);
router.get('/ballistix', listaController.Ballistix);
router.get('/amd', listaController.Amd);
router.get('/hyperx', listaController.HyperX);
router.get('/samsung', listaController.Samsung);
router.get('/coolermaster', listaController.CoolerMaster);
router.get('/alienware', listaController.Alienware);
router.get('/corsair', listaController.Corsair);
router.get('/logitech', listaController.Logitech);
router.get('/aoc', listaController.AOC);
router.get('/kingston', listaController.Kingston);
router.get('/intel', listaController.Intel);
router.get('/tenda', listaController.Tenda);
router.get('/hp', listaController.Hp);
router.get('/marvo', listaController.Marvo);
router.get('/trust', listaController.Trust);
router.get('/razer', listaController.Razer);


module.exports = router;
