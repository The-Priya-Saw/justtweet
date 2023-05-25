const express = require("express");
const ProfileModel = require("./models/Profile.js");
const TweetModel = require("./models/TweetModel.js");
const router = express.Router();


router.get("/profile/:userId", async(req, res) => {
    const {userId} = req.params;
    const profile = await ProfileModel.findOne({userId});
    if(profile){
        res.status(200).json(profile);
        return;
    }
    res.status(404).json({message: "userid not found"});
});

router.post("/tweet",async(req, res) => {
    const {userId, tweet, date} = req.body;
    const data = {userId, tweet, date, like:18, dislike:64, comment:202, share: 155 }
    const tweetDocument = await TweetModel.create(data); 
    if(tweetDocument){
        res.status(201).json(tweetDocument);
        return;
    }
    res.status(400).json({message: "Bad Request"});
});

router.get("/getAllTweets/:userId",async (req, res) => {
    const {userId} = req.params;
    const tweets = (await TweetModel.find({userId})).reverse();
    res.status(200).json(tweets);
} );

module.exports = router;
