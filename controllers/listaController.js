const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	root: (req, res) => {
		return res.render("index");
	},

	// Detail - Detail from one product
	detail: (req, res) => {

		const product = productModel.findById(req.params.productId);

		return res.render('detail', {product})

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
	destroy : (req, res) => {
		
	}
};

module.exports = controller;