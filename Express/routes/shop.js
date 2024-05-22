const path = require('path'); //path module provides function that allows passing an absolute path

const express = require('express');
//Router function allows routes to be exported to app.js file
const router = express.Router();
//export util/path function to get root directory
const dirName = require('../utils/path');

router.get('/', (req, res, next) => {
    // res.send('<h1>Hello from Express!!</h1>');
    // res.sendFile('../views/shop.html') --> would return an error as this requires an absolute path
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
    res.sendFile(path.join(dirName, 'views', 'shop.html'));
    /*
     1. path.join enables concatenation of path as the way the address is joined may different for different systems
     2. __dirname would store the actual path - in this case the location of routes folder
    */
});

module.exports = router;