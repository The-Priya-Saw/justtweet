import React from "react";

const TweetCard = ({ tweetProps }) => {
  console.log("profielPice",tweetProps )
  return (
    <div class="d-flex mt-3 border-top border-bottom">
      <div class="">
        <img src={tweetProps.profilePicture} class="avatar mt-1"></img>
      </div>
      <div class="tweetCard">
        <div class="user mb-2">
          <b> {tweetProps.userName} </b> {tweetProps.userId} - {tweetProps.date}
        </div>

        <div class="tweet mb-4">{tweetProps.tweet}</div>

        <div class="tweetStats d-flex">
          <h6 class="m-2">{tweetProps.like}</h6>
          <h6 class="m-2">{tweetProps.dislike}</h6>
          <h6 class="m-2">{tweetProps.comment}</h6>
          <h6 class="m-2">{tweetProps.share}</h6>
        </div>
      </div>
    </div>
  );
};
export default TweetCard;
