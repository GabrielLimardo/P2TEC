let db = require('../../database/models');

const apiInfoController = {
    list: function(req, res){
        let products = db.Product.findAll();
        let lastProduct = db.Product.findOne({
            order: [[ 'createdAt', 'DESC' ]]

        });
       
        let categories = db.Category.findAll();
        let users = db.User.findAll();

        Promise.all([products, lastProduct, categories, users])
            .then(function([products, lastProduct, categories, users]){

                let api = {
                    meta: {
                        status: 200,
                        url: req.originalUrl
                    },

                    data: {

                        metrics: [
                            {
                                title: "Products in Database",
                                value: products.length
                            },
                            
                            {
                                title: "Users quantity",
                                value: users.length
                            }

                        ],

                        lastProduct: {
                            name: lastProduct.title,
                            descripcion: lastProduct.description,
                            image: lastProduct.image
                        },
                        categories: categories                 
                        
                    }
                }
                res.json(api);
                
            })

    } 
}

module.exports = apiInfoController;