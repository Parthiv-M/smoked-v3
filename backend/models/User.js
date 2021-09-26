const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const nconf = require('nconf');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = new Schema({
  name: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    unique: true,
    required: true,
    minLength: 4,
    maxLength: 10
  },
  userAvatar: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  college: {
    type: String,
    required: true
  },
  registrationNum: {
    type: String, 
    required: true
  },
  password: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 10
  },
  score: {
    type: Number,
    default: 0
  },
  currLevel: {
    type: Number,
    default: 0
  }, 
  // for forgot password functionality
  verifyCode: {
    type: String
  },
  answerLog: [{
    level: Number,
    userAnswer: String,
    isCorrect: Boolean
  }],
  leaderplot: [{
    time: Date,
    score: Number
  }]
});

// create a jwt with the user payload
User.methods.generateAuthToken = function(payload) {
    token = jwt.sign(
        payload,
        nconf.get('JWT_SECRET'),
        { expiresIn: 360000 }
    );
    return token;team
}

// encrypts the password before saving to the database
User.pre('save', function (next) {
    var user = this;
  
    if (user.isModified('password')) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(user.password, salt, (err, hash) => {
          user.password = hash;
          next();
        });
      });
    } else {
      next();
    }
});

module.exports = user = mongoose.model("User", User);