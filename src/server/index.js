const express = require('express');
const os = require('os');
const bodyParser = require("body-parser").json();

// router start here
const petbnb = require('./router/petbnb');
const app = express();

app.use(bodyParser);
app.use(express.static('dist'));
app.use('/service', petbnb);

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));


// router.all('/service/user/:endpoint', authenticateToken, getGRPCAdminUserInfo, userServiceCall);
// app.all('/service/petbnbservice/:endpoint', function (req, res, next) {
//   console.log('Accessing the secret section ...')
//   next() // pass control to the next handler
// })

app.listen(3000, () => console.log('Listening on port 3000!'));
