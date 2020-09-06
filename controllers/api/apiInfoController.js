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
                                borderColor: "border-left-primary",
                                title: "Products in Database",
                                value: products.length,
                                icon: "fa-clipboard-list"
                            },
                            {
                                borderColor: "border-left-success",
                                title: "Amount in Products",
                                value: "$200",
                                icon: "fa-dollar-sign"
                            },
                            
                            {
                                borderColor: "border-left-warning",
                                title: "Total Users",
                                value: users.length,
                                icon: "fa-user-check"
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