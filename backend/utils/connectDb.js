
const mongoose = require('mongoose');
const nconf = require('nconf');

nconf.argv().env().file({ file: 'utils/config.json' });

// method that connects to the MongoDB database
const connectDB = async () => {
    try {
        await mongoose.connect(nconf.get("MONGODB_URI"), {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB is connected");
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;