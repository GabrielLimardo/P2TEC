const bycrypt = require("bcryptjs");
const crypto = require("crypto");
const { validationResult } = require("express-validator");
const jsonModel = require('../models/jsonModel');
const cartModel = jsonModel('cart');
const productsModel = jsonModel('products');
const {
  User,
  Product,
  Cart,
  Item,
  sequelize,
} = require("../database/models");


const carritoController = {
    cart(req, res) {
      const user = req.session.user;
        Item.findAll({
          where: {
            userId: req.session.user.id,
            state: 1,
          },
          include: ['product'],
        }).then((items) => {
          return res.render("cart", { items, user })
        });
      },
    
      addToCart(req, res) {
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
          // Busco el producto que voy a agregar como Item.
          Product.findByPk(req.body.productId, {  
          })
            .then((product) => {
              // Creo el Item de compra
              return Item.create({
                salePrice: product.price,
                quantity: req.body.quantity,
                subTotal: product.price * req.body.quantity,
                state: 1,
                userId: req.session.user.id,
                productId: product.id,
              });
            })
            .then((item) => res.redirect("/carrito"))
            .catch((e) => console.log(e));
        } else {
           Product.findByPk(req.body.productId, {  })
             .then(product => {
                return res.render('/lista/detail', {product, errors: errors.mapped()})
             })
        }
      },
      addCart(req, res) {
        const errors = validationResult(req);
    
        if (errors.isEmpty()) {
          // Busco el producto que voy a agregar como Item.
          Product.findByPk(req.body.productId, {  
          })
            .then((product) => {
              // Creo el Item de compra
              return Item.create({
                salePrice: product.price,
                quantity: req.body.quantity,
                subTotal: product.price * req.body.quantity,
                state: 1,
                userId: req.session.user.id,
                productId: product.id,
              });
            })
            .then((item) => res.redirect("/lista"))
            .catch((e) => console.log(e));
        } else {
           Product.findByPk(req.body.productId, {  })
             .then(product => {
                return res.render('/lista/detail', {product, errors: errors.mapped()})
             })
        }
      },
      
      deleteFromCart(req, res) {
        Item.destroy({
          where: {
            id: req.body.itemId,
          },
          force: true,
        })
          .then((response) => res.redirect("/carrito"))
          .catch((e) => console.log(e));
      },
      deleteallFromCart(req, res) {
        Item.destroy({
          where: {
            state: 1,
          },
          force: true,
        })
          .then((response) => res.redirect("/carrito"))
          .catch((e) => console.log(e));
      },
    
      shop(req, res) {
        let items;
    
        // busco los items agregados al carrito
        Item.findAll({
          where: {
            userId: req.session.user.id,
            state: 1,
          },
        })
          // cierro los items
          .then((itemsSearched) => {
            items = itemsSearched;
            return Item.closeItems(req.session.user.id);
          })
          // busco el ultimo carrito creado
          .then(() => {
            return Cart.findOne({
              order: [["createdAt", "DESC"]],
            });
          })
          // creo el nuevo carrito
          .then((cart) => {
            return Cart.create({
              orderNumber: cart ? ++cart.orderNumber : 1000,
              total: items.reduce(
                (total, item) => (total = total + item.subTotal),
                0
              ),
              userId: req.session.user.id,
            });
          })
          // les asigno el id del carrito nuevo a los items no asignados
          .then((cart) => {
            return Item.assignItems(req.session.user.id, cart.id);
          })
          // redirect
          .then(() => res.redirect("/carrito/history"))
          .catch((e) => console.log(e));
      },
    
      history(req, res) {
        const user = req.session.user;
        Cart.findAll({
          where: {
            userId: req.session.user.id,
          },
          include: {
            all: true,
            nested: true,
            paranoid: false,
          },
          order: [["createdAt", "DESC"]],
        })
          .then((carts) => {
            res.render("history", { carts, user });
          })
          .catch((e) => console.log(e));
      },
    
      showBuyDetail(req, res) {
        const user = req.session.user;
        Cart.findByPk(req.params.id, {
          include: {
            all: true,
            nested: true,
            paranoid: false,
          },
        }).then((cart) => res.render("buyDetail", { cart, user  }));
      },

}

module.exports = carritoController;