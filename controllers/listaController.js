let db  = require("../database/models");
let sequelize = db.sequelize;

const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    root: (req, res) => {
        const user = req.session.user;
        db.Product.findAll({
            include: ['category']
        })
        .then(function(results){
            const ProductosAll = results;
            return res.render("lista",{data:ProductosAll, user})
        })
        .catch(e => console.log(e))
       
    },

    detail: (req, res) => {
        const user = req.session.user;
        db.Product.findByPk(req.params.productId)
        .then(product => {
            return res.render("detail", { product, user })
        })
        .catch(e => console.log(e));
    },
    Componentes: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "1"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))
    },
    Notebooks: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "2"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))

    },
    Monitores: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "3"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))

    },
    Perisfericos: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "4"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))

    },
    PcOffice: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "6"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))

    },
    PcStreamer: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "5"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))

    },
    PcDiseno: (req, res) => {
        const user = req.session.user;
        db.Product.findAll({
            where: {
                categoryId: "7"
            }
        })
        .then(resultados => {
            
            return res.render("lista",{data:resultados, user})
        })
        .catch(e => console.log(e))
    },
    create: (req, res) => { //te llava a la pagina de creacion
		// Do the magic
        const user = req.session.user;
		return res.render('product-create-form', {user})
	},
	
	// Create -  Method to store
	store: (req, res) => { //esta es para crear un producto nuevo
		//modelo le pregunto por 
		let products = productModel.leerJson()
		
		
		let newId = productModel.createId(products);

		let newProduct = {
			// id: newId,
			...req.body,
		}

		products = [...products, newProduct]

		

		productModel.guardarUno(products);

		return res.redirect('/')
		
	},

	// Update - Form to edit
	edit: (req, res) => { //te lleva a la edicion
        const user = req.session.user;
	//modelo le pregunto por un id, parametro del id
		const product = productModel.findById(req.params.productId)
	//una vez que se hizo el json modelo encontrando el producto 
		return res.render('product-edit-form', {product, user})
	},
	// Update - Method to update
	update: (req, res) => { //lo actualiza
		//vamos a sobre product model aplicar el edit de model y que tenga como parametros 
		productModel.edit(req.body, req.params.productId)
		
		return res.redirect('/lista/detail/' + req.params.productId);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => { //elimina
		let products = productModel.leerJson(jsonModel)

		products.forEach((elem, index)=> {
			if(elem.id ==req.params.productId){
				products.splice(index, 1)
			}
		});
		productModel.escribirJson(products, jsonModel);
		return res.redirect("/")
	}



};

module.exports = listaController;