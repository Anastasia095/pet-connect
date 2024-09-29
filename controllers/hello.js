const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Serving Hello Page');
    res.render('hello', { name: 'Stranger', title: 'Home' });
});

router.get('/getstarted', (req, res) => {
    console.log('Serving get started Page');
    res.render('getstarted', { name: 'Stranger', title: 'Get Started' });
});

module.exports = router;
