// const Sequelize = require('sequelize');

// const sequelize = require('../util/database');
const getdb = require("../util/database").getdb;
const mongodb=require("mongodb")
class Product {
  constructor(title, price, imageUrl, description) {
    this.title = title;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
  }
  save() {
    const db = getdb();
    return db
      .collection("Products")
      .insertOne(this)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }
  static fetchAll() {
    const db = getdb();
    return db
      .collection("Products")
      .find()
      .toArray()
      .then((products) => console.log(products))
      .catch((err) => console.log(err));
  }

  static findById(productId) {
    const db = getdb();
    return db
      .collection("Products")
      .find({ _id: new mongodb.ObjectId(productId) }).next()
      .then((product) => console.log(product))
      .catch((err) => console.log(err));
  }
}

// const Product = sequelize.define('product', {
//   id: {
//     type: Sequelize.INTEGER,
//     autoIncrement: true,
//     allowNull: false,
//     primaryKey: true
//   },
//   title: Sequelize.STRING,
//   price: {
//     type: Sequelize.DOUBLE,
//     allowNull: false
//   },
//   imageUrl: {
//     type: Sequelize.STRING,
//     allowNull: false
//   },
//   description: {
//     type: Sequelize.STRING,
//     allowNull: false
//   }
// });

module.exports = Product;
