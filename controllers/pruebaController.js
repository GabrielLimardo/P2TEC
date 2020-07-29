const db= require("../database/models/index");
const sequelize = db.sequelize;
const Op = db.sequelize.op

const pruebaController = {
    root: (req, res) => {
      res.render("nuevo")
       
    },
}

    module.exports = pruebaController;