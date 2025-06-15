const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const cors = require('cors');
const { connectToDb } = require("./db/db");
const userRoute = require('./routes/user.routes')
const app = express();

connectToDb()
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/", (req, res) => {
    res.send("H")
})

app.use('/users', userRoute)

module.exports = app;