const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Question = new Schema({
    level: {
        type: Number,
        required: true,
        unique: true
    },
    image: {
        type: String   
    },
    video: {
        type: String   
    },
    audio: {
        type: String   
    },
    questionText: {
        type: String,
        default: ""
    },
    urlHint: {
        type: String,
        required: true
    },
    hints: [{
        isImage: Boolean,
        isVideo: Boolean,
        isAudio: Boolean,
        isString: Boolean,
        isLocked: Boolean,
        hint: String,
    }],
    points: {
        type: Number,
        required: true
    }
});

module.exports = question = mongoose.model("Question", Question);