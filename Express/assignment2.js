/************Express.js -- Assignment2***********/
const http = require('http');
const express = require('express');
const app = express();

/********1.Middleware***********/
// app.use((req, res, next) => {
//     console.log("In the 1st middleware");
//     next();
// });
// app.use((req, res, next) => {
//     console.log("In the 2nd middleware");
//     res.send('<h1>Hello from Express!!</h1>'); 
// });

/***********2.Handle routes***********/
app.use('/users', (req, res, next) => {
    res.send('<h1>The "Users" page</h1>');
});

app.use('/', (req, res, next) => {
    res.send('<h1>Hello from Express!!</h1>');
});

app.listen(3000); 