const getUser = require('./../database/get_login');
const { sign, verify } = require('jsonwebtoken');
const bcrypt = require('bcrypt');
// const error = require('./error');



const secret = process.env.SECRET;

exports.get = (req, res) => {
  res.render('login', { style: { style1: 'css/style.css', loginStyle: 'css/login.css' } });
};

// exports.post = (req, res) => {
//   const name = req.body.x;
//   const pass = req.body.y;


// tape('login with username and password', (t) => {
//   const expected = valied;
//  login.create({
//  username:'hani',
//  password:'1232',
//  email:'hani@gmail.com',
//  })


// exports.post(req,res) => {
//  Users.find({})
//   .then(Users=>{
//     username:('req.body.username'),
//     Password:('req.body.password'),
//     email:('req.body.email')
  

//   })
// };

  // getUser(name, (erro, data) => {
  
  //   if (data.length === 0) {
  //     res.send('invalid username');
  //   } else {
  //     bcrypt.compare(pass, data[0].password, (err, response) => {
  //       // if (err) error.catchError(req, res);
  //       if (!response) {
  //         res.send('Password or username not valied try another one');
  //       } else {
  //         const userDetails = { userId: data[0].id, userName: data[0].user_name, role: data[0].type_role };

  //         const token = sign(userDetails, secret);
  //         res.cookie('user', token, { maxAge: 900000000000000, httpOnly: true });
  //         res.send('success');
  //       }
  //     })
  //   }
  // })
