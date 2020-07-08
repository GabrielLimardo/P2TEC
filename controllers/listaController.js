const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    root: (req, res) => {
        const products = productModel.leerJson()

        return res.render("lista", {data: products});
    },

    detail: (req, res) => {
        const product = productModel.findById(req.params.productId);

        return res.render('detail', {product: product});

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
         
        return res.render('lista', { data: Componentes });

    },
    Notebooks: (req, res) => {

        const Notebooks = productModel.filterBySomething(product => {
            return product.category == 'Notebooks';
        })
        return res.render('lista', { data: Notebooks });

    },
    Monitores: (req, res) => {

        const Monitores = productModel.filterBySomething(product => {
            return product.category == 'Monitores';
        })
        return res.render('lista', { data: Monitores });

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
    

        return res.render('lista', { data: Perisfericos });

    },
    PcOffice: (req, res) => {

        const pcOffi = productModel.filterBySomething(product => {
            return product.category == 'pc office';
        })
        return res.render('lista', { data: pcOffi });

    },
    PcStreamer: (req, res) => {

        const pcStr = productModel.filterBySomething(product => {
            return product.category == 'pc streming';
        })
        return res.render('lista', { data: pcStr });

    },
    PcDiseno: (req, res) => {

        const PcDise = productModel.filterBySomething(product => {
            return product.category == 'pcdiseno';
        })
        return res.render('lista', { data: PcDise });

    },
    create: (req, res) => {
		// Do the magic
		
		return res.render('product-create-form')
	},
	
	// Create -  Method to store
	store: (req, res) => {
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
	edit: (req, res) => {
	//modelo le pregunto por un id, parametro del id
		const product = productModel.findById(req.params.productId)
	//una vez que se hizo el json modelo encontrando el producto 
		return res.render('product-edit-form', {product, toThousand})
	},
	// Update - Method to update
	update: (req, res) => {
		//vamos a sobre product model aplicar el edit de model y que tenga como parametros 
		productModel.edit(req.body, req.params.productId)
		
		return res.redirect('/lista/detail/' + req.params.productId);
	},

	// Delete - Delete one product from DB
	destroy : (req, res) => {
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