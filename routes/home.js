const express= require("express")
const router = express.Router();
const homeController = require("../controllers/homeController")

router.get("/",  homeController.root);
router.get('/search', homeController.search);


router.get("/mostrarNumeroSession", function (req, res) {
    res.send("Session tiene el numero: " + req.session.numeroVisitas);
})

module.exports = router;
