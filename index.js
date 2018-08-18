// const express = require('express'),
//   app = express(),
//   passport = require('passport'),
//   auth = require('./auth'),
//   cookieParser = require('cookie-parser'),
//   cookieSession = require('cookie-session');

// require('dotenv').config();
// auth(passport);
// app.use(passport.initialize());

// app.use(cookieSession({
//   name: 'session',
//   keys: ['SECRECT KEY'],
//   maxAge: 24 * 60 * 60 * 1000
// }));
// app.use(cookieParser());

// app.get('/', (req, res) => {
//   if (req.session.token) {
//     res.cookie('token', req.session.token);
//     res.json({
//       status: 'session cookie set'
//     });
//   } else {
//     res.cookie('token', '');
//     res.json({
//       status: 'session cookie not set'
//     });
//   }
// });

// app.get('/logout', (req, res) => {
//   req.logout();
//   req.session = null;
//   res.redirect('/');
// });

// app.get('/auth/google', passport.authenticate('google', {
//   scope: ['https://www.googleapis.com/auth/userinfo.profile']
// }));

// app.get('/auth/google/callback',
//   passport.authenticate('google', {
//     failureRedirect: '/'
//   }),
//   (req, res) => {
//     console.log(req.user.token);
//     req.session.token = req.user.token;
//     res.redirect('/');
//   }
// );

// app.use(express.static(`${__dirname}`));

// app.listen(process.env.PORT, () => {
//   console.log(__dirname, 'this is the dirname');
//   console.log(`SERVER UP on ${process.env.PORT}`);
// });

// app.get('*', (request, response) => {
//   response.sendFile(`${__dirname}/index.html`);
// });

'use strict';

const cors = require('cors');
const express = require('express');
const googleRouter = require('./google-router');
require('dotenv').config();

const app = express();

app.use(cors({
  credentials: true,
  origin: ['http://localhost'],
}));
app.use(express.static(`${__dirname}`));
app.use(googleRouter);

app.listen(process.env.PORT, () => {
  console.log(__dirname, 'this is the dirname');
  console.log(`SERVER UP on ${process.env.PORT}`);
});

app.get('*', (request, response) => {
  response.sendFile(`${__dirname}/index.html`);
});