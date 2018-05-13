# PropertyApp
Demonstrates NODE, EXPRESS REST API, mocha, chai framework capabilities.
API is powered by data from excel sheet.

# SetUp:
1. Git clone the repo
2. Run command - npm install
3. Run command to test API - npm test
4. Test endpoints by running command - npm start
    
    a. End point to get all properties by their type
       
       Method - GET
       
       Content Type - application/json
       
       URL - /property/getByType/<param>
       
    b. End point to get all properties by their post outward
       
       Method - GET
       
       Content Type - application/json
       
       URL - /property/getByPostOutward/<param>
       
    c. End point to get 'n' number of expensive properties
       
       Method - GET
       
       Content Type - application/json
       
       URL - /property/getExpensive/<param>
