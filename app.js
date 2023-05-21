const express=require('express');
const bodyParser = require('body-parser');
//const db=require('./database');
const sequelize = require('./database');
const addressRoutes = require('./routes/CompanyAddress');
const LoginRoutes = require('./routes/LoginRoute');
const UsersRoutes = require('./routes/UsersRoute');
const SessionTableRouts=require('./routes/SessionTableRoutes')
const ForgotPasswordRoute=require('./routes/ForgotPasswordRoute')
const Unit_MasterRoute=require('./routes/Unit_MasterRoute')
const Group_MasterRoute=require('./routes/Group_MasterRoute')
const Item_MasterRoute=require('./routes/Item_MasterRoute')


const Address = require('./models/Adress');
const Users=require('./models/Users');
const Session=require('./models/Session');
const Unit_Master=require('./models/Unit_Master');
const Unit_MasterDelete=require('./models/Unit_MasterDelete');
const Group_Master=require('./models/Group_Master');
const Group_MasterDelete=require('./models/Group_MasterDelete');
const Item_Master=require('./models/Item_Master');

const app=express();
const cors = require('cors');

app.use(bodyParser.json()); 


app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader("X-Powered-By",' 3.2.1');
    res.setHeader("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use( addressRoutes);
app.use(LoginRoutes);
app.use(UsersRoutes);
app.use(SessionTableRouts);
app.use(ForgotPasswordRoute);
app.use(Unit_MasterRoute);
app.use(Group_MasterRoute);
app.use(Item_MasterRoute);


Users.hasOne(Session);
Session.belongsTo(Users);
Unit_Master.hasMany(Item_Master);
Item_Master.belongsTo(Unit_Master);
Group_Master.hasMany(Item_Master);
Item_Master.belongsTo(Group_Master);

sequelize
  .sync()
  .then(result => {
    app.listen(3000);
     console.log(result);
  })
  .catch(err => {
    console.log(err);
  });

