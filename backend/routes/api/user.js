const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require("./../../models/User");
const { check, validationResult } = require('express-validator');
const Avatar = require("avatar-builder");
const authenticate = require("./../../middleware/authenticate");
const { customAlphabet } = require("nanoid"); 

// route to create a new user for smoked
router.post("/signUp", 
    [
        check('email', 'Enter a valid email').isEmail().normalizeEmail(),
        check('password', 'Password is required').exists().isLength({ min: 4, max: 10 }),
        check('userName', 'Username is required').exists().isLength({ min: 4, max: 10 })
    ],

    async (req, res) => {

    // checks for validation result
    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    var userObj = {
        name: req.body.name,
        userName: req.body.userName,
        email: req.body.email,
        college: req.body.college,
        password: req.body.password, 
        registrationNum: req.body.registrationNum
    }

    // create a random avatar
    const avatar = Avatar.squareBuilder(128);

    await avatar.create("gabriel").then(buffer => {
        let enc = buffer.toString("base64")
        userObj.userAvatar = enc;
        // Buffer.from(buffer.toString("base64"), 'base64') ==> to decode base64 to buffer
    })

    try {
        const user = new User(userObj);
        user.save().then(() => {
            const payload = {
                user: {
                  userId: user._id,
                  userName: user.userName
                }
            };
            token = user.generateAuthToken(payload);
            res.setHeader('x-auth-token', token);
            res.status(200).send({ message: "Sign up successful" });
        }).catch((err) => {
            res.status(403).json({ errors: [err] });
        })    
    } catch (err) {
        res.status(500).send({ error: 'Server error' });
    }
});

// route to sign in an existing user
router.post("/signIn", 
    [
        check('email', 'Enter a valid email').isEmail().normalizeEmail(),
        check('password', 'Password is required').exists()
    ],
    async (req, res) => {
        // checks for validation result
        const errors = validationResult(req);
        
        if(!errors.isEmpty()){
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { email, password } = req.body;

            // check if user exists in the database
            let user = await User.findOne({ email });
            if (!user) {
                return res.status(400).json({
                    errors: [{ msg: 'Invalid Email' }]
                });
            }

            // check if the password matches
            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(400).json({
                   errors: [{ msg: 'Invalid Password' }]
                });
            }

            const payload = {
                user: {
                  userId: user._id,
                  userName: user.userName
                }
            };

            token = user.generateAuthToken(payload);
            res.setHeader('x-auth-token', token);
            res.status(200).send({ success: true, message: "Login successful" });
        } catch (error) {
            res.status(500).send({ success: false, message: 'Oops, server error' });
        }
});

// route to create a verification code for an existing user
router.post("/createVerificationCode", authenticate, async (req, res) => {
    const userId  = req.user.userId;
    const userEmail = req.body.email;
    
    try {
        // find the user
        const verifyUser = await User.findOne({ email: userEmail });

        // if user does not exist
        if(!verifyUser) {
            return res.status(400).send({ success: false, message: "User does not exist" });
        }

        // if the user requesting verification is not same as the logged in user return error
        if(verifyUser._id.toString() !== userId) {
            return res.status(401).send({ success: false, message: "User is not the same" });
        }

        // email code here @heisenberg-ayush

        // create the verification code
        const nanoid = customAlphabet('1234567890', 5);
        const verifyCode = nanoid();

        await User.findOneAndUpdate(
            { email: userEmail },
            {
                $set: {
                    verifyCode: verifyCode
                }
            }
        ).then(() => {
            return res.status(200).send({ success: true, data: parseInt(verifyCode) });
        })
        .catch(err => {
            res.status(403).send({ success: false, message: "Error saving verification code" });
        })        
    } catch (error) {
        res.status(500).send({ success: false, message: "Oops, server error" });   
    }
});

module.exports = router;