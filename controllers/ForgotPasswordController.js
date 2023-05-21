const Users = require('../models/Users');
const nodemailer = require('nodemailer');
exports.getPassword= async (req, res,next) => {
    try {
        const { email} = req.body;
        console.log(email);
        const user = await Users.findOne({ where: {Username:email} });
        console.log(user);
        if (!user) {
          return res.status(401).json({ message: 'Invalid email ,Your Email does not exist' });
        }
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'arnabm123456789@gmail.com',
              pass: 'ctgfjnpzrotkxlrb'
            }
          });

          const mailOptions = {
            from: 'xnxx@xnxx.com',
            to: email,
            subject: 'Password',
            text: `password is ${user.Password}`
          };

          transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
              console.log(error);
            } else {
              console.log('Email sent: ' + info.response);
            }
        });
        return res.status(200).json({ message: 'New password sent to your email' });
        
    }
    catch{
        return res.status(500).json({ message: 'Internal server error' });
    }
};