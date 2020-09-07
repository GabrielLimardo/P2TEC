let db = require('../../database/models');

const apiProductsController = {
    list: function(req, res){
        db.Product.findAll({
            include: { all: true}
        })
            .then(function(products){

                let api = {
                    meta: {
                        status: 200,
                        quantity: products.length,
                        url: req.originalUrl
                    },

                    data: {
                        
                        products: products.map(product => {
                            return ({
                                id: product.id,
                                name: product.name,
                                descripcion: product.descripcion,
                                price: product.price,
                                image: product.image,
                                category: product.category.name, 
                                brand: product.brand.name,
                                
                            })                   
                            
                        })
                    }
                }
                res.json(api);
                
            })

    },

    store: function(req, res){

    },

    buscar: function(req, res){
        db.Product.findByPk(req.params.id, {
            include: { all: true}
        })
            .then(function(product){
                console.log(product);
                let api = {
                    meta: {
                        status: 200,
                        url: req.originalUrl
                    },

                    data: {
                        product: {
                            id: product.id,
                            name: product.title,
                            descripcion: product.description,
                            price: product.price,
                            image: product.image,
                            category: product.category.title, 

                        }
                    }
                }
                res.json(api);
            })

    },

    



}

module.exports = apiProductsController;