'use strict';
const express = require('express')
    , router = express.Router()
    , path = require("path")
    , Builder = require('../responseBuilder.js')
    , propertyData = require(path.join(__dirname, '../../csvFileData.js'));

function setSuccessResponse(data, res) {
    var responseBuilder = new Builder(200, 'success', data);
    res.json(responseBuilder);
}

router.get('/getByType/:type', (req, res) => {
    var propertyTypeData = propertyData.filter(p => p.PROPERTY_TYPE === req.params.type);
    setSuccessResponse(propertyTypeData, res);
});

router.get('/getByPostOutward/:postOutward', (req, res) => {
    var propertyOutwardData = propertyData.filter(p => p.POSTCODE.slice(0, 3) === req.params.postOutward);
    setSuccessResponse(propertyOutwardData, res);
});

router.get('/getExpensive/:num', (req, res) => {
    if (isNaN(req.params.num)) {
        throw new Error("Param is NaN");
    }
    propertyData.sort(function (a, b) { return b.PRICE - a.PRICE });
    let resData = req.params.num > propertyData.length ? propertyData : propertyData.slice(0, req.params.num);
    setSuccessResponse(resData, res);
});

router.get('/*', function (req, res) {
    res.redirect('/')
})

module.exports = router
