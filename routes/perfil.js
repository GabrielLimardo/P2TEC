const express= require("express")
const router = express.Router();
const perfilController = require("../controllers/perfilController")

router.get("/", perfilController.root);


module.exports = router;
