let db  = require("../database/models");
let sequelize = db.sequelize;

const jsonModel = require('../models/jsonModel');
const products = require("../database/models/products");
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
            return res.render("prueba",{data:ProductosAll, user})
        })
        .catch(e => console.log(e))
       
    },

    detail: (req, res) => {
        Product.findByPk(req.params.id)
        .then(products => res.render("detail", { products }))
        .catch(e => console.log(e));
        // const product = db.Product.findById(req.params.productId);
        // const user = req.session.user;
        // return res.render('detail', {product: product, user});
    },
    Componentes: (req, res) => {

        const fuente = productModel.filterBySomething(product => {
            return product.category == 'Fuentes de alimentacion';
        })
        const memoria = productModel.filterBySomething(product => {
            return product.category == 'Memorias RAM';
        })
        const micro = productModel.filterBySomething(product => {
            return product.category == 'Microprocesadores';
        })
       
        const Componentes = fuente.concat(memoria).concat(micro);
        const user = req.session.user;
        return res.render('lista', { data: Componentes, user});

    },
    Notebooks: (req, res) => {

        const Notebooks = productModel.filterBySomething(product => {
            return product.category == 'Notebooks';
        })
        const user = req.session.user;
        return res.render('lista', { data: Notebooks, user});

    },
    Monitores: (req, res) => {

        const Monitores = productModel.filterBySomething(product => {
            return product.category == 'Monitores';
        })
        const user = req.session.user;
        return res.render('lista', { data: Monitores, user});

    },
    Perisfericos: (req, res) => {

        const conect = productModel.filterBySomething(product => {
            return product.category == 'Conectividad';
        })
        const Streaming = productModel.filterBySomething(product => {
            return product.category == 'Streaming';
        })
        const teclado = productModel.filterBySomething(product => {
            return product.category == 'Teclados';
        })
        const Perisfericos = conect.concat(Streaming).concat(teclado);
    
        const user = req.session.user;
        return res.render('lista', { data: Perisfericos, user});

    },
    PcOffice: (req, res) => {

        const pcOffi = productModel.filterBySomething(product => {
            return product.category == 'pc office';
        })
        const user = req.session.user;
        return res.render('lista', { data: pcOffi, user});

    },
    PcStreamer: (req, res) => {

        const pcStr = productModel.filterBySomething(product => {
            return product.category == 'pc streming';
        })
        const user = req.session.user;
        return res.render('lista', { data: pcStr, user});

    },
    PcDiseno: (req, res) => {

        const PcDise = productModel.filterBySomething(product => {
            return product.category == 'pcdiseno';
        })
        const user = req.session.user;
        return res.render('lista', { data: PcDise, user});

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