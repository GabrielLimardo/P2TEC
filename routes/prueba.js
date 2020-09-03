const express= require("express")
const router = express.Router();
const pruebaController = require("../controllers/pruebaController")


router.get("/", pruebaController.root);
router.post("/procesar-pago", pruebaController.pago);

module.exports = router;