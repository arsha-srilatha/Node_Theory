
const reqHandler = (req, res) => {
    //Create a form that takes user name
    if (req.url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Submit</button></form></body>');
        res.write('</html>');
        return res.end();
    }
    //Prints the user entered data to console.
    if (req.url === '/create-user' & req.method === 'POST') {
        const body = [];
        req.on('data', (userData) => {
            body.push(userData);
        });
        req.on('end', () => {
            const parseBody = Buffer.concat(body).toString();
            const message = parseBody.split('=')[1];
            console.log(message);
        });
    }
    //2.b. Handle route '/users' that shows a list of dummy users
    if (req.url === '/users') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Assignment1</title></head>');
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>');
        res.write('</html>');
        return res.end();
    }
    //2.a. Handle route '/' that shows a greeting
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Assignment1</title></head>');
    res.write('<body><h1>Hello User!</h1></body>');
    res.write('</html>');
    res.end();
};

/*****************Ways to export modules****************/
//1. Exporting only one variable
module.exports = reqHandler;

