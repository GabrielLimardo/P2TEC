const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const controller = {
	root: (req, res) => {
		const visited = productModel.filterBySomething(product => {
			return product.category == 'DISCO ESTADO SOLIDO SSD';
		})

		const inSale = productModel.filterBySomething(product => {
			return product.category == 'STREAMING  Y VIDEO  CAPTURADORA GAMING';
		})

		return res.render('index', { visited, inSale });
	},
	search: (req, res) => {
		// Do the magic

		const busqueda = req.query.keywords;

		const products = productModel.filterBySomething(product => {
			return product.name == busqueda;
		})

		return res.render('results', {products, busqueda})


	},
};

module.exports = controller;

