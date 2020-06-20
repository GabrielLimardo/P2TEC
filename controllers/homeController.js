const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const controller = {
	root: (req, res) => {
		
			const conect = productModel.filterBySomething(product => {
				return product.category == 'Conectividad';
			})
			return res.render('index', { conect });
	},
	search: (req, res) => {
		// Do the magic

		const busqueda = req.query.keywords;

		const products = productModel.filterBySomething(product => {
			return product.name.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1;
		})

		return res.render('results', {products, busqueda})


	},
};

module.exports = controller;

