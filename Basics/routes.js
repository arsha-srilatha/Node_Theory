//import file module for reading and writing files
const fs = require('fs');

const reqHandler = (req, res) => {
    // console.log(req); //prints the entire reqquest object to console
    // console.log(req.url, req.method, req.headers) //prints selected parameters of request object
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end(); //to allow the remaining res.write() functions to execute.
    }
    //Redirecting back to main page after viewing /message
    if (req.url === '/message' & req.method === 'POST') {
        const body = []; //array to store data entered by user in the html form page
        req.on('data', (userData) => {
            body.push(userData); //adds the user entered data using on which is a listener that executes a function wen data is received
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1]; //the data returned is of the form key = value string
            // fs.writeFileSync('message.txt', message); //blocks the code until file is written and then will navigate to main page once file is written
            // res.statusCode = 302;
            // res.setHeader('Location', '/');
            // return res.end();
            fs.writeFile('message.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();
            }); // the file is written async and will go to main page while writing file
        });
    }
    //process.exit(); --> forcefully exit from the server
    //Working with response that would be returned to the client
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Node App</title></head>');
    res.write('<body><h1>Hello Arsha!</h1></body>');
    res.write('</html>');
    res.end(); //this would stop allowing writing on response object. 
};

/*****************Ways to export modules****************/
//1. Exporting only one variable
module.exports = reqHandler;

//2. Exporting an object
// module.exports = {
//     handler: reqHandler,
//     default: "Basic App Working"
// };

//3.Exporting as module properties
//module.exports.handler = reqHandler;
//module.exports.default = "Basic App Working";

//4. Exporting as properties
//exports.handler = reqHandler;
//exports.default = "Basic App Working";
