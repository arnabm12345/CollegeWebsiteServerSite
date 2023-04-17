const express=require('express');
const bodyParser = require('body-parser');
//const db=require('./database');
const sequelize = require('./database');
const addressRoutes = require('./routes/CompanyAddress');
const LoginRoutes = require('./routes/LoginRoute');
const UsersRoutes = require('./routes/UsersRoute');

const Address = require('./models/Adress');
const Users=require('./models/Users');
const Session=require('./models/Session');
const app=express();


app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});
app.use( addressRoutes);
app.use(LoginRoutes);
app.use(UsersRoutes);

Users.hasOne(Session);
Session.belongsTo(Users);


sequelize
  .sync({force:true})
  .then(result => {
    app.listen(3000);
     console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

