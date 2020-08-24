const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


const pruebaController = {
    root: (req, res) => {
      const user = req.session.user;
                return res.render("pruebaperfil", { user })
    }
}

    module.exports = pruebaController;