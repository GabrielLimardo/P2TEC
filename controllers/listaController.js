const jsonModel = require('../models/jsonModel');
const productModel = jsonModel('products');

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const listaController = {
    root: (req, res) => {
        const products = productModel.leerJson()

        return res.render("lista", {data: products});
    },

    detail: (req, res) => {
        const product = productModel.findById(req.params.productId);

        return res.render('detail', {product: product});

    },
    Componentes: (req, res) => {

        const fuente = productModel.filterBySomething(product => {
            return product.category == 'Fuentes de alimentacion';
        })
        const memoria = productModel.filterBySomething(product => {
            return product.category == 'Memorias RAM';
        })
        const micro = productModel.filterBySomething(product => {
            return product.category == 'Microprocesadores';
        })
       
        const Componentes = fuente.concat(memoria).concat(micro);
         
        return res.render('lista', { data: Componentes });

    },
    Notebooks: (req, res) => {

        const Notebooks = productModel.filterBySomething(product => {
            return product.category == 'Notebooks';
        })
        return res.render('lista', { data: Notebooks });

    },
    Monitores: (req, res) => {

        const Monitores = productModel.filterBySomething(product => {
            return product.category == 'Monitores';
        })
        return res.render('lista', { data: Monitores });

    },
    Perisfericos: (req, res) => {

        const conect = productModel.filterBySomething(product => {
            return product.category == 'Conectividad';
        })
        const Streaming = productModel.filterBySomething(product => {
            return product.category == 'Streaming';
        })
        const teclado = productModel.filterBySomething(product => {
            return product.category == 'Teclados';
        })
        const Perisfericos = conect.concat(Streaming).concat(teclado);
    

        return res.render('lista', { data: Perisfericos });

    },




};

module.exports = listaController;