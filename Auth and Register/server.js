require('dotenv').config();
const express = require('express');
const connectDB = require('./Database/db');
const authRoutes = require('./Routes/auth-routes');
const homeRoutes = require('./Routes/home-routes');

const app = express();
connectDB();

app.use(express.json()); // For JSON data
app.use(express.urlencoded({ extended: true })); // For form data

app.use("/api/auth", authRoutes);
app.use("/api/home", homeRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


