// File: app.js
// Student Name: Barath Srinivasan
// Student ID: 301139370
// Date: October 2, 2023
//  




// app.js
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

// Include the routes from index.js
const routes = require('./routes/index');
app.use('/', routes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Import necessary modules and configure your Express app

// ...

// Handle form submission
app.post('/submit', (req, res) => {
    const { first , last, contactnumber, email, message } = req.body;

    // Do something with the user's input (e.g., save it to a database, send an email)

    // Redirect the user back to the home page
    res.redirect('/');
});

// ...
