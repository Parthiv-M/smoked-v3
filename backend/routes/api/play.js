const express = require('express');
const authenticate = require('../../middleware/authenticate');
const Question = require('../../models/Question');
const router = express.Router();
const _ = require("lodash");

// route to get question details with level number
router.get("/level/:num", authenticate, async (req, res) => {
    
    const levelNum = req.params.num;
    
    try {
        const question = await Question.find({ level: levelNum });
        
        // check if the question exists
        if(!question) {
            return res.status(400).send({ success: false, message: "No such level" });
        }

        res.status(200).send({ 
            success: true, 
            data: { ..._.pick(question, ["level", "image", "video", "audio", "questionText", "urlHint", "points"]) } 
        });
    } catch (error) {
        res.status(500).send({ success: false, message: "Oops, server error" });
    }
});

// route to get the hints for a particular level
router.get("/hints/:num", authenticate, async (req, res) => {
    
    const levelNum = req.params.num;

    try {
        const question = await Question.find({ level: levelNum });
        
        // check if the question exists
        if(!question) {
            return res.status(400).send({ success: false, message: "No such level" });
        }

        res.status(200).send({ success: true, data: { ..._.pick(question, ["hints"]) } });
    } catch (error) {
        res.status(500).send({ success: false, message: "Oops, server error" });
    }
});

// route to update the leaderplot for a particular user
router.post("/updateLeaderPlot", authenticate, (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

// route to get the leaderplot values for top 10 users
router.get("/getLeaderPlot", authenticate, (req, res) => {
    try {
        
    } catch (error) {
        
    }
});

// helper route to add questions to the database
router.post("/", (req, res) => {
    try {
        const question = new Question({
            level: req.body.level,
            image: req.body.image,
            video: req.body.video,
            audio: req.body.audio,
            questionText: req.body.questionText,
            urlHint: req.body.urlHint,
            hints: req.body.hints,
            points: req.body.points
        })    
        question.save().then(() => {
            res.status(200).send({ success: true, message: "Question created" });
        })
        .catch((err) => {
            res.status(403).send({ success: false, message: "Error creating question" })
        })
    } catch (error) {
        res.status(500).send({ message: "Oops. server error" });
    }
});

module.exports = router;