const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require('nodemailer');
require("dotenv").config();

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

// routes for password reset
app.post('/send', async(req, res) => {
    const output = `
    <p>You have a new password reset request</p>
    <p>Email: ${req.body.email}</p>
    `;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: process.env.HOST,
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.PASS, // generated ethereal password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: `"Smoked Contact 👻" <${process.env.EMAIL}>`, // sender address
        to: req.body.email, // list of receivers
        subject: "Password Reset Request", // Subject line
        text: "", // plain text body
        html: output, // html body
    });

    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // res.render('password', { msg: 'Email has been sent' });
});

// listens to the app on PORT
app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});