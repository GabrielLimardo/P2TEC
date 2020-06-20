const express = require("express")
const router = express.Router();
const listaController = require("../controllers/listaController")

router.get("/", listaController.root);
router.get('/detail/:productId/', listaController.detail);
router.get('/Componentes', listaController.Componentes);
router.get('/Notebooks', listaController.Notebooks);
router.get('/Monitores', listaController.Monitores);
router.get('/Perisfericos', listaController.Perisfericos);
router.get('/PcOffice', listaController.PcOffice);
router.get('/PcStreamer', listaController.PcStreamer);
router.get('/PcDiseno', listaController.PcDiseno);

module.exports = router;
