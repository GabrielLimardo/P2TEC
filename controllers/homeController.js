const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {
	root: (req, res) => {
		const user = req.session.user;
        db.Product.findAll({
            where: {
				categoryId: "4"
            }
        })
        .then(resultados => {
            
            return res.render("index",{data:resultados, user})
        })
        .catch(e => console.log(e))
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
			console.log(JSON.stringify(user))
			return res.render('results', {products, busqueda, user})
        })
        .catch(e => console.log(e))


	},
	
};

module.exports = controller;

