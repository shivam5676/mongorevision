//
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
let db;
const mongoConnect = (cbfn) => {
  mongoClient
    .connect(
      "mongodb+srv://shivam:1234shivam@cluster0.ugn8rkz.mongodb.net/?retryWrites=true&w=majority"
    )
    .then((client) => {
      console.log("connected");
      db = client.db();
      cbfn(client);
    })
    .catch((err) => console.log(err));
};
const getdb = () => {
  if (db) {   
    return db;
  }
  throw "no databse found";
};
exports.getdb = getdb;
exports.mongoConnect = mongoConnect;
