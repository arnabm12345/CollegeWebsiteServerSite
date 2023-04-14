const Address = require('../models/Adress');
exports.getAddress= (req, res, next) => {
    Address.findAll()
    .then(address=>{
        res.status(200).json({
            address: address
          });
        }
    )
    .catch(err=>{
        console.log(err);
    }
    );
    
  };