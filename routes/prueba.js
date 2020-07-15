const express= require("express")
const router = express.Router();
const pruebaController = require("../controllers/pruebaController")


router.get("/prueba", pruebaController.root);

module.exports = router;