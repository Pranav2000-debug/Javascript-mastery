const express = require('express');
const bodyParser = require("body-parser");
const locationRoutes = require('./Routes/eLocation');

const app = express(); 

// Template using 'ejs' for dynamic HTML files
// app.set('view engine', 'ejs');
// app.set('views', 'Views'); // Views is the folder that holds the template files.

// MiddleWare
app.use(bodyParser.json()); // parses the incoming request body and adds the parsed body back into the body field on the request object
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
}) 
app.use(locationRoutes);

//  MiddleWare 
// app.use((req, res, next) => {
//     res.setHeader('Content-type', 'text/html');
//     next(); // Move onto the next middleware in line....
// });
// //  MiddleWare 
// app.use((req, res, next) => {
//     const userName = req.body.username || 'Unkown User';
//     res.render('index', {
//         user: userName
//     });
// });

app.listen(3000);