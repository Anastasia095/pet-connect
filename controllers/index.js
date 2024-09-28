const express = require('express');
const helloRouter = require('./hello');

const router = express.Router();

router.use('/', helloRouter); // Use helloRouter for the root route

module.exports = router;
