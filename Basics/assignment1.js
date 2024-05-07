/***************Assignment 1*******************/
//1. Create a server that listens to port 3000
const http = require('http');
const handler = require('./assignment-routes1');
const httpServer = http.createServer(handler);
httpServer.listen(3000);