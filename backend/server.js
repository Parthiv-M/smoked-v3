const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./utils/connectDb");

const port = process.env.PORT || 3002;

// connect to the database
connectDB();

// use express middleware
app.use(cors());
app.use(express.json({ extended: false }));

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});