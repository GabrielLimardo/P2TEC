let db = require('../../database/models');

const apiCategoriesController = {
    list: function(req, res){
        db.Category.findAll()
            .then(function(categories){
                let api = {
                    meta: {
                        status: 200,
                        quantity: categories.length,
                        url: req.originalUrl
                    },

                    data: {
                        categories: categories.map(function(category){
                            return ({
                                id: category.id,
                                name: category.name
                            })
                        })
                    }
                }
                res.json(api);
            })

    }






}
module.exports = apiCategoriesController;