const express = require("express")
const router = express.Router();
const carritoController = require("../controllers/carritoController")

const validator = require('../middlewares/validator');
const authMiddleware = require('../middlewares/auth');

// router.get("/", carritoController.index);

//faltan los middleware
router.get('/',authMiddleware, carritoController.cart);
router.post('/addToCart',authMiddleware,validator.addToCart, carritoController.addToCart);
router.post('/addCart',authMiddleware,validator.addToCart, carritoController.addCart);
router.get('/history',authMiddleware,  carritoController.history);
router.post('/shop',authMiddleware, carritoController.shop);
router.post('/deleteFromCart',authMiddleware, carritoController.deleteFromCart);
router.post('/deleteallFromCart',authMiddleware, carritoController.deleteallFromCart);
router.get('/buy-detail/:id',authMiddleware, carritoController.showBuyDetail);



module.exports = router;