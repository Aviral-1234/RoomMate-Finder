require('dotenv').config();
const cors = require('cors');
const express = require('express');
const connectDB = require('./Database/db');
const authRoutes = require('./Routes/auth-routes');
const homeRoutes = require('./Routes/home-routes');
const ListRoutes = require('./Routes/room-routes');
const flatRoutes = require('./Routes/flat-routes');

const app = express();
connectDB();

app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/room", ListRoutes);

// api 
app.use("/api/flats", flatRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


