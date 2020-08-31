const express= require("express")
const router = express.Router();
const perfilController = require("../controllers/perfilController")

router.get("/:id", perfilController.root);
router.post("/edit/:id", perfilController.edit);
router.get("/controlarea", perfilController.controlarea);
router.post("/updaterol", perfilController.updaterol);
router.get("/cambiarcontra", perfilController.cambiarcontra);
router.post("/updatecontra", perfilController.updatecontra);


module.exports = router;
