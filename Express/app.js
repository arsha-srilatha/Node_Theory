/************Express.js***********/
const http = require('http');
const path = require('path');
//import express module -- middleware
const express = require('express');
//express module exports a function
const app = express();
//body-parser module that would parse the req body as required
const bodyParser = require('body-parser');



/********Use function to create middlewares***********/
//takes a series of request handlers - executed for every incoming requests
// app.use((req, res, next) => {
//     console.log("In the 1st middleware");
//     next();
//     //next is a function that would transfer request to the next middleware in line
// });
// app.use((req, res, next) => {
//     console.log("In the 2nd middleware");
//     res.send('<h1>Hello from Express!!</h1>'); //send response to client until there is no next function.
//     //express would set some default headers
// });



/***********Handling routes using express***********/
//create a middleware that parse the request body for every request sent.
//app.use(bodyParser.urlencoded({ extended: false }));

// app.use('/', (req, res, next) => {
//     console.log("This always runs");
//     next();
//     // res.send('<h1>Hello from Express!!</h1>'); -- cause app to crash
// });

// app.use('/add-product', (req, res, next) => {
//     res.send('<form action="/product" method="POST"><input type="text" name="product"><button type="submit">Add Product</button></form>');
// });

// //this code will always run irrespective of the type of request
// // app.use('/product', (req, res, next) => {
// //     console.log(req.body); //would return undefined if body-parser is not used.
// //     res.redirect('/');
// // })

// //this code would limit the execution only for post requests
// app.post('/product', (req, res, next) => {
//     console.log(req.body); //would return undefined if body-parser is not used.
//     res.redirect('/');
// })

// app.use('/', (req, res, next) => {
//     res.send('<h1>Hello from Express!!</h1>');
// });

/**************Exporting routes from other files****************/
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

//display static files
app.use(express.static(path.join(__dirname, 'public'))); //allows exporting files in the public folder

//app.use(adminRoutes);
app.use('/admin', adminRoutes);// would only handle those routes that start with /admin/...
app.use(shopRoutes);
//Note: order of usage matters if use function is used inside routers instead of restricting functions like get or post. 

/*********Adding an error page***********/
//Below code would enable the app to display a common error page whenever an unknown route is encountered.
//When app.use is used for handling '/', all the unknown routes would be directed to the middleware that handles '/'.
//If app.get is used for handling '/', then the error 'Cannot GET' would be shown.
app.use((req, res, next) => {
    // res.status(404).send("<h1>Page Not Found!!!</h1>"); //res can have cascading functions with send being the last one.
    res.status(404).sendFile(path.join(__dirname, 'views', 'error.html'));
});

/*********Listening to an app************/

// const httpServer = http.createServer(app);
// httpServer.listen(3000);
app.listen(3000); //alternate way