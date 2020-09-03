const db = require("../database/models");

const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");


const pruebaController = {
   
    root: (req, res) => {
        const user = req.session.user;
        return res.render("prueba", {user})

    },
    pago: (req, res) => {
        var mercadopago = require('mercadopago');
    mercadopago.configurations.setAccessToken(config.TEST-1472750997602732-090321-f6a69f21558a00aec5aac33e82c522f7-529430382);

    var payment_data = {
    transaction_amount: 136,
    token: token,
    description: 'Aerodynamic Wooden Hat',
    installments: installments,
    payment_method_id: payment_method_id,
    issuer_id: issuer_id,
    payer: {
        email: 'annamae.bahringer@hotmail.com'
    }
    };

    // Guarda y postea el pago
    mercadopago.payment.save(payment).then(function (data) {
    // ...    
    // Imprime el estado del pago
    Console.log(payment.status);
    }).catch(function (error) {
    // ...
    });
    }
}

    module.exports = pruebaController;