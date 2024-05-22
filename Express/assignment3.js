/*************routes/home.js -- File for handling '/'***************/
// const path = require('path');
// const express = require('express');
// const router = express.Router();
// router.get('/', (req, res, next) => {
//  res.sendFile(path.join(__dirName, '../', 'views', 'home.html'));
// });

// module.exports = router;

/***********routes/users.js -- File for handling '/users'*************/
// const path = require('path');
// const express = require('express');
// const router = express.Router();
// router.get('/users', (req, res, next) => {
//     res.sendFile(path.join(__dirName, '../', 'views', 'users.html'));
// });
// router.post('/users', (req, res, next) => {
//     console.log(req.body);
//     res.redirect('/');
// });

// module.exports = router;

/**********app.js****************/
const http = require('http');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const homeRoutes = require('./routes/home');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public'))); //public folder contains external css files

app.use(homeRoutes);
app.use(usersRoutes);
app.listen(3000); 