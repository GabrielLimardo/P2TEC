const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');
let db  = require("../database/models");
const sequelize = require('sequelize');
const Op = sequelize.Op;


const controller = {
	root: (req, res) => {
        const user = req.session.user;
        
        return res.render("perfil",{data: user})
    }
};

module.exports = controller;