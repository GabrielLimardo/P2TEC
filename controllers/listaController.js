let db = require("../database/models");
const {
    promiseImpl
} = require("ejs");

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    root: (req, res) => {
        const user = req.session.user;
        db.Product.findAll({
                //  include: ['category']
                include: {
                    all: true,
                    nested: true
                }
            })
            .then(function (results) {
                const ProductosAll = results;
                return res.render("lista", {
                    data: ProductosAll,
                    user
                })
            })
            .catch(e => console.log(e))

    },

    detail: (req, res) => {
        const user = req.session.user;
        db.Product.findByPk(req.params.productId)
            .then(product => {
                db.Comment.findAll({
                    where: {
                        productId: req.params.productId
                    },
                    include: [{association: "user"}],
                }).then((comentarios) => {
                        // return res.send(comentarios);
                        return res.render("detail", {
                            product,
                            user,
                            comentarios
                    });      
                }).catch(e => console.log(e));
            }).catch(e => console.log(e));
    },
    Componentes: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "1"
                },
                
            })
            .then(resultados => {
                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Notebooks: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "2"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))

    },
    Monitores: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "3"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))

    },
    Perifericos: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "4"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))

    },
    PcStreamer: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "5"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
        },


    PcOffice: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "6"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))

    },
    PcDiseno: (req, res) => {
        const user = req.session.user;
        db.Product.findAll({
                where: {
                    categoryId: "7"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Aorus: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "1"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Asus: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "2"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    AData: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "3"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Seagate: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "4"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Amd: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "5"
                },
                
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Ballistix: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "6"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    HyperX: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "7"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Samsung: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "8"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Alienware: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "9"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Corsair: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "10"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Logitech: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "11"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    AOC: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "12"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Kingston: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "13"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    CoolerMaster: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "14"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Intel: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "15"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Tenda: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "16"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Hp: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "17"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Marvo: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "18"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Trust: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "19"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    Razer: (req, res) => {

        const user = req.session.user;
        db.Product.findAll({
                where: {
                    brandId: "20"
                },
            })
            .then(resultados => {

                return res.render("lista", {
                    data: resultados,
                    user
                })
            })
            .catch(e => console.log(e))
    },
    create: (req, res) => { //te llava a la pagina de creacion
        const user = req.session.user;
        if (typeof user !== 'undefined' && user.rol === 1) {
            // Do the magic
            db.Category.findAll()
                .then((categories) => {
                    db.Brand.findAll()
                        .then((brands) => {
                            return res.render('product-create-form', {
                                user,
                                categories,
                                brands
                            });
                        })
                        .catch(e => console.log(e));
                })
                .catch(e => console.log(e));
        } else {
            return res.render('not-found', {
                user
            });
        }
    },

    store: (req, res, next) => {
        db.Product.create({
                name: req.body.name,
                price: req.body.price,
                descripcion: req.body.descripcion,
                categoryId: req.body.categoryId,
                brandId: req.body.brandId,
                image: req.file.filename
            })
            .then(() => {
                return res.redirect('/');
            })
    },
    edit: (req, res) => {
        const user = req.session.user;
        if (typeof user !== 'undefined' && user.rol === 1) {
            db.Category.findAll()
                .then((categories) => {
                    db.Brand.findAll()
                        .then((brands) => {
                            return db.Product.findByPk(req.params.id)
                                .then(function (product) {
                                    return res.render("product-edit-form", {
                                        product: product,
                                        user,
                                        categories,
                                        brands
                                    });
                                });
                        })
                        .catch(e => console.log(e));

                })


        } else {
            return res.render('not-found', {
                user
            });
        }
    },
    update: (req, res) => { //lo actualiza

        db.Product.update({
            name: req.body.name,
            price: req.body.price,
            descripcion: req.body.descripcion,
            category: req.body.categoryId,
            brandId: req.body.brandId,
            image: req.body.image
        }, {
            where: {
                id: req.params.id
            }
        })
        res.redirect("/lista/detail/" + req.params.id)
    },
    destroy: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect("/lista");
    },

};

module.exports = listaController;