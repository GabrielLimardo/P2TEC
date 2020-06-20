const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    // Root - Show all products
    root: (req, res) => {
        const products = productModel.leerJson()

        return res.render("lista", {data: products});
    },

    // Detail - Detail from one product
    detail: (req, res) => {

        const product = productModel.findById(req.params.productId);

        return res.render('detail', { product: product })

    },

    // Create - Form to create
    create: (req, res) => {
        // Do the magic
    },

    // Create -  Method to store
    store: (req, res) => {
        // Do the magic
    },

    // Update - Form to edit
    edit: (req, res) => {


    },
    // Update - Method to update
    update: (req, res) => {
        // Do the magic

    },

    // Delete - Delete one product from DB
    destroy: (req, res) => {

    }

};

module.exports = listaController;