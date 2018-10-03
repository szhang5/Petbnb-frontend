const express = require('express');
const router = express.Router();

const petbnbServiceCall = require('../middleware/pet-bnb-service/petbnbServiceCall');


// middleware that is specific to this router
router.all('/petbnbservice/:endpoint', /*authenticateToken*/ petbnbServiceCall);

module.exports = router;
