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

// routes related to user and user auth
app.use("/api/user", require("./routes/api/user"));

// route for recaptcha validation
app.use("/api/areyouhuman", require("./routes/api/recaptcha"));

// routes for everything related to the game
app.use("/api/game", require("./routes/api/play"));

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});