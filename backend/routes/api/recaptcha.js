const express = require('express');
const router = express.Router();
const nconf = require('nconf');

nconf.argv().env().file({ file: 'utils/config.json' });

// route to validate that whoever is at the other end is not a robot 
router.get("/recaptcha", async (req, res) => {
    const RECAPTCHA_SERVER_KEY = nconf.get("RECAPTCHA_SERVER_KEY");

    const humanKey = req.body.humanKey;

    try {
        const isHuman = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
                            method: "POST",
                            headers: {
                                Accept: "application/json",
                                "Content-Type" : "application/x-www-form-urlencoded; charset=utf-8"
                            },
                            body: `secret=${RECAPTCHA_SERVER_KEY}&response=${humanKey}` 
                        })
                        .then(res => res.json())
                        .then(json => json.success)
                        .catch(err => {
                            throw new Error(err.message)
                        })
        if(!humanKey || !isHuman) {
            res.status(403).send({ success: false, message: "You are not a human, bot" });
        } else if (isHuman) {
            res.status(200).send({ success: true,  message: "You are human!" });
        }
    } catch (error) {   
        res.status(500).send({ success: false, message: "Oops, server error" });
    }
});

module.exports = router;