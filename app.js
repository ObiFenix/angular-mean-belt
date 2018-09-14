// =======================
// Load the express module
// =======================
const express = require("express"),
      bodyParser = require('body-parser'),
      session = require('express-session'),
      mongoose = require('./back-end/config/mongoose'),
      path = require('path'),
      app = express();
    //   bcrypt = require('bcryptjs'),


// ============================
// Application-Level Middleware
// ============================
app.use(express.static(path.join(__dirname, 'front-end', 'dist', 'front-end')));
app.use(bodyParser.json());
app.use(session({
    secret: 'this$belt%is|fire!',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
})); //This is to set up sessions


// ========================
// Endpoint Routes Handlers
// ========================
require('./back-end/config/routes/restaurants.js')(app);


// ================================
// Clients connection port settings
// ================================
PORT = process.env.PORT || 8000;       // holds the arbitrary port for server
app.listen(PORT, () => {               // Clients connection port settings
    console.log(`\n====================[ REPORT ]\n| => Connection Status: Server started and is running on localhost at port ${PORT}`);
});
