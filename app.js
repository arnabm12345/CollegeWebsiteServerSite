const express=require('express');
const bodyParser = require('body-parser');
//const db=require('./database');
const sequelize = require('./database');
const addressRoutes = require('./routes/CompanyAddress');
const Address = require('./models/Adress');

const app=express();


app.use(bodyParser.json()); 
app.use( addressRoutes);

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
     //console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

