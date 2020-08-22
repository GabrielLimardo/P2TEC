const express= require("express")
const router = express.Router();
const homeController = require("../controllers/homeController")

router.get("/",  homeController.root);
router.get('/search', homeController.search);
router.get("/perfil", homeController.perfil);

router.get("/prueba", function (req, res) {
    if (req.session.numeroVisitas == undefined) {
        req.session.numeroVisitas = 0;
    }

    req.session.numeroVisitas++;

    res.send("Session tiene el numero: " + req.session.numeroVisitas)
});

router.get("/mostrarNumeroSession", function (req, res) {
    res.send("Session tiene el numero: " + req.session.numeroVisitas);
})

module.exports = router;
