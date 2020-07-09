const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const controller = {
	root: (req, res) => {
			const destac = productModel.filterBySomething(product => {
				return product.especial == 'DESTACADO';
			})
			const user = req.session.user;
			return res.render('index', { destac, user});
	},
	search: (req, res) => {
		// Do the magic

		const busqueda = req.query.keywords;

		const products = productModel.filterBySomething(product => {
			return product.name.toLowerCase().indexOf(busqueda.toLowerCase()) !== -1;
		})
		const user = req.session.user;
		return res.render('results', {products, busqueda, user})


	},
};

module.exports = controller;

