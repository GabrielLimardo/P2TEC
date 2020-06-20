const jsonModel = require('../models/jsonModel');
const cartModel = jsonModel('cart');
const productsModel = jsonModel('products');
const carritoController = {

    index: function(req, res){
        const arrayIds = cartModel.leerJson();
        let products = [];

        arrayIds.forEach(id => {
            products.push(productsModel.findById(id))            
        });

        return res.render('carrito', {data:  products, removeFromCart: this.removeFromCart});          
    },

}

module.exports = carritoController;