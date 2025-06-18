const dotenv = require("dotenv");
dotenv.config();
const express = require('express')
const cors = require('cors');
const { connectToDb } = require("./db/db");
const userRoute = require('./routes/user.routes')
const captainRoute = require('./routes/captain.routes')
const mapsRoutes = require('./routes/maps.routes')
const rideRoutes = require('./routes/ride.routes')
const cookieParser = require('cookie-parser')
const app = express();

connectToDb()
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("H")
})

app.use('/users', userRoute)
app.use('/captains', captainRoute)
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

module.exports = app;