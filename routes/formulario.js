const express= require("express")
const router = express.Router();
const formularioController = require("../controllers/formularioController")

router.get("/", formularioController.index);

module.exports = router;
