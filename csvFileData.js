const csvjson = require('csvjson')
  , fs = require('fs')
  , path = require("path")
  , data = fs.readFileSync(path.join(__dirname, './test/property-data.csv'), { encoding: 'utf8' });

const options = {
  delimiter: ','
};

var propertyData = csvjson.toObject(data, options);
console.log("Reading --------> property-data.csv");

module.exports = propertyData;