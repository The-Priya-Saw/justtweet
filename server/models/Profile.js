const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        require: true
    },
    location: {
        type: String,
        required: true
    },
    joiningDate:{
        type: String,
        required: true,
    },
    profilePicture:{
        type:String,
    },
    tweet: {
        type: Number
    },
    following:{
        type: Number
    },
    follower:{
        type: Number
    }
});

const ProfileModel = mongoose.model("UserProfiles", ProfileSchema);

module.exports = ProfileModel;