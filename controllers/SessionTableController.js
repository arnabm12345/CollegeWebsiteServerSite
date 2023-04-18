const Users = require('../models/Users');
const Session=require('../models/Session');

exports.getSession= (req, res, next) => {

    let user_id = req.params.id;
   
   Users.findAll({
    include:Session,
    where :{id:user_id}
   })
   .then(comp_login=>{
    res.status(200).json({
        comp_login: comp_login
      });
    }
)
.catch(err=>{
    return res.status(500).json({ message: 'Internal server error' });
    console.log(err);
}
);
  

};