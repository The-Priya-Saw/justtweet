const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
    userId: {type:String, required: true},
    tweet: {type:String, required: true, min: 1},
    date: {type: String},
    like: {type: Number, default: 0},
    dislike: {type: Number, default: 0},
    comment: {type: Number, default: 0},
    share: {type: Number, default: 0}
});

const TweetModel = mongoose.model("Tweet", TweetSchema);

module.exports = TweetModel;