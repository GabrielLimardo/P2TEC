const express = require("express")
const router = express.Router();
const listaController = require("../controllers/listaController")

router.get("/", listaController.root);
router.get('/detail/:productId/', listaController.detail);
router.get('/create/', listaController.create); /* GET - Form to create */
router.post('/create/', listaController.store); /* POST - Store in DB */

/*** EDIT ONE PRODUCT ***/ 
router.get('/edit/:productId', listaController.edit); /* GET - Form to create */
router.put('/edit/:productId', listaController.update); /* PUT - Update in DB */

/*** DELETE ONE PRODUCT***/ 
router.delete('/delete/:productId', listaController.destroy);

router.get('/Componentes', listaController.Componentes);
router.get('/Notebooks', listaController.Notebooks);
router.get('/Monitores', listaController.Monitores);
router.get('/Perisfericos', listaController.Perisfericos);
router.get('/PcOffice', listaController.PcOffice);
router.get('/PcStreamer', listaController.PcStreamer);
router.get('/PcDiseno', listaController.PcDiseno);

module.exports = router;
