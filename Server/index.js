require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Mongo Connection
const mongoConnect = require("./config/dbConfig");
mongoConnect();

// Initialize the app
const app = express();

// Middlewares
app.use(express.static(__dirname + "/public"));
app.use(cors());
app.use(bodyParser.json());


// Start the server
const PORT = process.env.PORT || 3010;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});