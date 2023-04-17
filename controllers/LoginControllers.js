const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
exports.getLogin= async (req, res,next) => {
    try {
      const { email, password } = req.body;
      const user = await Users.findOne({ where: {Username:email} });
      console.log(user);
      if (!user) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      if (user.Password !== password) {
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      const token = jwt.sign({ id: user.id }, 'secrete',{ expiresIn: '1h' });
      res.status(200).json({id:user.id, token:token });
    } 
    catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };