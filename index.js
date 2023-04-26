//Setup Express server
const express = require("express");
const app = express();
const port = 8000;

//Setup Mongoose/Mongodb
const db = require('./config/mongoose');
const List = require('./models/list');

//Setup View Engine
app.set('view engine', 'ejs');
app.set('views', "./views");

//Setup Static files for EJS
app.use(express.urlencoded());
app.use(express.static('static'));

//Setup Router
app.use('/', require("./routes/home"));

//Upon starting the server
app.listen(port, function (err) {
    if (err) {
        console.log("Error occured by Express");
        return;
    }
    console.log("port working fine on: ", port);
});


