// const { get } = require("../routes/admin");
const { ObjectId } = require("mongodb");
const { getdb } = require("../util/database");

class User {
  constructor(username, email) {
    this.name = username;
    this.email = email;
  }
  save() {
    const db = getdb();
    db.collections("users")
      .insertOne(this)
      .then((result) => console.log(result))
      .catch(err);
  }
  static findbyId(userId){
    const db=getdb();
    return db.collections("users").find({_id:new ObjectId(userId)});
  }
}

module.exports = User;
