const express = require('express');
const os = require('os');
const path = require('path');
const bodyParser = require("body-parser").json();
const engines = require('consolidate');

// include router start here
const petbnb = require('./router/petbnb');
const app = express();

app.use(bodyParser);

app.use(express.static('dist'));
// set view engine
app.set('views', '/service/dist');
app.engine('html', engines.mustache);
app.set('view engine', 'html');


// router
app.use('/service', petbnb);

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));

app.get('*', function(req, res) {
  res.render('index.html');
})

// app.get('*', (req, res) => res.render('index.html'));

// router.all('/service/user/:endpoint', authenticateToken, getGRPCAdminUserInfo, userServiceCall);
// app.all('/service/petbnbservice/:endpoint', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

app.listen(3007, () => console.log('Listening on port 3007!'));
