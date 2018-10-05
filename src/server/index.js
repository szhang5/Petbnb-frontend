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



// put this at the end
app.get('*', function(req, res) {
  res.render('index.html');
})

app.listen(3007, () => console.log('Listening on port 3007!'));
