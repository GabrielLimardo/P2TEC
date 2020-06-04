const express= require("express")
const router = express.Router();
const listaController = require("../controllers/listaController")

router.get("/", listaController.index);

module.exports = router;
