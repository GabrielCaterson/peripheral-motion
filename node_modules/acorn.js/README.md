# acorn.js
An API for Acorn (https://acorn.utoronto.ca/sws, University of Toronto's student information service).
## Installation
The API is available only as a Node.js module. Use the command below to install the `node_module` using `npm`:
```
npm install acorn.js
```
## Usage
Require the `acorn.js` `node_module`. Create an `Acorn` class with a UTORid and its UTORid password by inputting them into the first two arguments of the `acorn.js` object respectively. Now, you are able to use `acorn.login()` on the `Acorn` object to login to the UTORid account. The `login` method returns a `Promise`. When the Promise is resolved, it returns the same `Acorn` object you used to `login`. You can then use the methods on the `Acorn` object e.g. getting basic student info by using `Acorn.getStudentBasicInfo`.
```javascript
require('dotenv').config()
const acornjs = require('acorn.js')
var acorn = new acornjs(process.env.UTORID, process.env.UTORID_PASSWORD)
acorn.login()
    .then(result => {
        // result is the Acorn object
        return result.getStudentBasicInfo()
    })
    .then(data => {
        // data is the JSON object with the information
        return acorn.logout()
    })
    .catch(error => {
        console.log(error)
    })
```
