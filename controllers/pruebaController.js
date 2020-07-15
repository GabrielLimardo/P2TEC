const db= require("../database/models/index");
const sequelize = db.sequelize;
const Op = db.sequelize.op

const pruebaController = {
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
}

    module.exports = pruebaController;