const express= require("express")
const router = express.Router();
const perfilController = require("../controllers/perfilController")

router.get("/", perfilController.root);
router.post("/edit", perfilController.edit);
router.get("/controlarea", perfilController.controlarea);
router.post("/updaterol", perfilController.updaterol);
router.get("/cambiarcontra", perfilController.cambiarcontra);
router.post("/updatecontra", perfilController.updatecontra);


module.exports = router;
