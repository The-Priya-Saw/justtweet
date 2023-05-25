import React, { useState } from "react";

const NewTweet = ({ profile, setTweets }) => {
  const [tweet, setTweet] = useState("");
  function handleChange(e){
    setTweet(e.target.value);
  }

  async function makeTweet(){
    let date = new Date();
    date = date.toDateString() + " " + date.toLocaleTimeString();
    const data = {tweet,userId:profile.userId, date };
    const response = await fetch("http://localhost:4000/tweet", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    });
    if(response.status === 201){

      const newTweet = await response.json();
      newTweet.profilePicture = profile.profilePicture;
      newTweet.userName = profile.userName;
      // console.log(newTweet);
      setTweets(newTweet);
    }
  } 
  return (
    <div class="newTweet d-flex flex-column flex-grow-1 me-2">
      <div class="d-flex">
        <div class="">
          <img src={profile.profilePicture} class="avatar mt-1"></img>
        </div>
        <div class="flex-grow-1">
          <textarea value={tweet} onChange={handleChange} class="form-control" rows="2"></textarea>

          <div class="">
            <button onClick={makeTweet} class="btn btn-primary flex-item ml-0 mt-3" type="submit">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewTweet;
