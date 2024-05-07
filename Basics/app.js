/***************Creating a Node Server*******************/
//1.import http core node module
const http = require('http');
const reqHandler = require('./routes');
//const handler = require(''./routes.handler); --> based on the way of export

//2.create a http server
/**********Option 1*********/
//function that handles request and responses
//function rqListener(req, res){}

//server created which handles all incoming requests via function
//http.createServer(rqListener);

/**********Option 2*********/
const httpServer = http.createServer(reqHandler); //creates an event loop - keeps running till an event is unregistered - enables multi-threading using FIFO queue
//const httpServer = http.createServer(reqHandler.default); --> based on the way of export
//3.the local port where the server listens to.
httpServer.listen(3000);