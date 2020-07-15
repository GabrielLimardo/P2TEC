const db= require("../database/models/index");
const sequelize = db.sequelize;
const products = require("../database/models/products");
const Op = db.sequelize.op

const pruebaController = {
    root: (req, res) => {
        db.products.findAll({
            include: [{association: "categories"}]
        })
        .then(function(results){
            const ProductosAll = results;
            return res.send(ProductosAll)
        });
       
    },
}

    module.exports = pruebaController;