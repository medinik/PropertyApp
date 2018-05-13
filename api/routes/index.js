const express = require('express');
const router = new express.Router();

router.use('/property', require('./property.js'));

router.get('/', function (req, res) {
    res.send('Home Page')
})

module.exports = router;