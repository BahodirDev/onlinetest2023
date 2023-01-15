const {Router} = require('express');
const { verifyIsLoggedIn } = require('../middlewares/verifyAuthToken');
const route = Router();

app.use('/api',require('./server'));



module.exports = route;