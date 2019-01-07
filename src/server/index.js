const express = require('express');
const path = require('path');
const bodyParser = require("body-parser").json();
const engines = require('consolidate');
const cookieParser = require('cookie-parser');

// include router start here
const petbnb = require('./router/petbnb');
const app = express();

app.use(bodyParser);
app.use(cookieParser());
app.use(express.static('dist'));
// set view engine
app.set('views', '/service/dist');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


// router
app.use('/isLogin', (req, res) => {
  if (req.cookies.email) {
  	return res.status(200).send({ 'success': true, 'email': req.cookies.email });
  }
  return res.status(200).send({ 'success': false });
})

app.use('/signOut', (req, res) => {
  if (req.cookies.email) {
  	res.clearCookie('email', {path:'/'});
  }
  return res.status(200).redirect('/signIn');
})

app.use('/service', petbnb);

app.get('/api/getUsername', (req, res) => res.send({ username: 'shi' }));



// put this at the end
app.get('*', function(req, res) {
  res.render('index.html');
})

app.listen(8080, () => console.log('Listening on port 8080!'));
