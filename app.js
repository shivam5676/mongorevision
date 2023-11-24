const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoConnect = require("./util/database").mongoConnect
const app = express();
const adminRoutes=require("./routes/admin")
const shopRoutes=require("./routes/shop")


app.set('view engine', 'ejs');
app.set('views', 'views');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  next();
  // User.findById(1)
  //   .then(user => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch(err => console.log(err));
});

app.use('/admin', adminRoutes);
app.use(shopRoutes);


// app.use(errorController.get404);

// Product.belongsTo(User, { constraints: true, onDelete: 'CASCADE' });
// User.hasMany(Product);
// User.hasOne(Cart);
// Cart.belongsTo(User);
// Cart.belongsToMany(Product, { through: CartItem });
// Product.belongsToMany(Cart, { through: CartItem });
// Order.belongsTo(User);
// User.hasMany(Order);
// Order.belongsToMany(Product, { through: OrderItem });

// sequelize
  // .sync({ force: true })
  // .sync()
  // .then(result => {
  //   return User.findById(1);
  //   // console.log(result);
  // })
  // .then(user => {
  //   if (!user) {
  //     return User.create({ name: 'Max', email: 'test@test.com' });
  //   }
  //   return user;
  // })
  // .then(user => {
  //   // console.log(user);
  //   return user.createCart();
  // })
  mongoConnect(()=>{
   
    app.listen(3000);
  })

