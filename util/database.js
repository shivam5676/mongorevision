//
const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;
const mongoConnect=(cbfn)=>{
  mongoClient
  .connect('mongodb+srv://shivam:1234Shivam@cluster0.ugn8rkz.mongodb.net/?retryWrites=true&w=majority')
  .then((response) => {
    console.log("connected");
    cbfn(response);
  })
  .catch((err) => console.log(err));
}
module.exports=mongoConnect

