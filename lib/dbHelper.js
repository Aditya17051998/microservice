require('dotenv').config();

const mongoose = require('mongoose');
const config = require("../config");

const connectionURL = `mongodb://${config.dbDetails.host}:${config.dbDetails.port}/${config.dbDetails.DBName}`;

const connectionOptions = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    useUnifiedTopology: true,
    reconnectInterval: 500,
    poolSize: 20,
    connectTimeoutMS: 10000,
};

// const connectionOptions = {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     reconnectInterval: 500,
//     poolSize: 20,
//     connectTimeoutMS: 10000,
// };

mongoose.connect(connectionURL, connectionOptions);
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", (err) => {
    console.log("Error connecting to MongoDB");
});

db.once("open", () => {
    console.log("Successfully connected to MongoDB");
});

module.exports = db;