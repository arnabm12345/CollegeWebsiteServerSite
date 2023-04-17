const Users = require('../models/Users');
const jwt = require('jsonwebtoken');
exports.getUsers= async (req, res,next) => {
    const authHeader = req.get('Authorization');
  if (!authHeader) {
    const error = new Error('Not authenticated.');
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(' ')[1];
    try {
             
        if (!token) {
            console.log("token:",token);
          return res.status(401).json({ message: 'Token missing' });
        }
    
        const { id } = jwt.verify(token, 'secrete');
        const user = await Users.findByPk(id);
        if (!user) {
          return res.status(404).json({ message: 'User not found' });
        }
    
        return res.json(user);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Internal server error' });
      }
    };