const express = require("express")
const router = express.Router();
const listaController = require("../controllers/listaController")

router.get("/", listaController.root);
router.get('/detail/:productId/', listaController.detail);

module.exports = router;