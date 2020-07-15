const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
const db = require("../database/models/index");
const sequelize = require('sequelize');
const Op = sequelize.Op;

const controller = {
	root: (req, res) => {
			const destac = productModel.filterBySomething(product => {
				return product.especial == 'DESTACADO';
			})
			const user = req.session.user;
			return res.render('index', { destac, user});
	},
	search: (req, res) => {

		const busqueda = req.query.keywords;

		db.Product.findAll({
			where: {
			  name: {
				[Op.like]: "%"+busqueda+"%",
			  },
			},
		  }).then(function(products){
			const user = req.session.user;
			return res.render('results', {products, busqueda, user})
        })
        .catch(e => console.log(e))


	},
	perfil: (req, res) => {
		const user = req.session.user;
		return res.render('perfil', {user});
},
};

module.exports = controller;

