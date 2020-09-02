const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


const pruebaController = {
    root: (req, res) => {
        const user = req.session.user;
        db.Product.findAll({
            include: ['category']
        })
            .then(function (results) {
                const ProductosAll = results;
                return res.render("prueba", { data: ProductosAll, user })
            })
            .catch(e => console.log(e))

    }
}

    module.exports = pruebaController;