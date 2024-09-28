const express = require('express');
const helloRouter = require('./hello');
const testRouter = require('./test');

const router = express.Router();

router.use('/', helloRouter); // Use helloRouter for the root route
router.use('/test', testRouter); // Use helloRouter for the root route

module.exports = router;
