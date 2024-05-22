
const path = require('path');
const express = require('express');
//Router function allows routes to be exported to app.js file
const router = express.Router();
//export util/path function to get root directory
const dirName = require('../utils/path');

//a particular set of routes
// router.get('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
// });

// router.post('/product', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// GET --> /admin/add-product -- will be added by app.js: refer line 64.
router.get('/add-product', (req, res, next) => {
    //  res.send('<form action="/admin/add-product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html')); //refer admin.js for details
    res.sendFile(path.join(dirName, 'views', 'add-product.html')); //uses the helper function inside utils/path.js
});

//POST --> /admin/add-product
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

//exporting the routes
module.exports = router;