import React, { useEffect, useState } from 'react';
import Navbarr from './components/navbar';
import Profilecover from './components/profilecover';
import Profilestats from './components/profilestat';
import ProfileInfo from './components/profileinfo';
import NewTweet from './components/newtweet';
import TweetCard from './components/tweetCard';
import Rightpanel from './components/rightPanel';

const App = () => {
  const [profile, setProfile] = useState({});
  const [tweets, setTweets] = useState([]);
  const [tweetCount, setTweetCount] = useState(0);

  function addNewTweet(newTweet){
    setTweets([newTweet,...tweets]);
  }

  useEffect(()=>{
    setTweetCount(tweets.length);

  }, [tweets]);


  useEffect(() => {
    const fetchData = async () => {
      const responseProfile = await fetch("http://localhost:4000/profile/@shubhangi");
      const resultProfile = await responseProfile.json();
      if(responseProfile.status === 200){
        console.log(resultProfile);
        setProfile(resultProfile);
      }
      const responseTweets = await fetch("http://localhost:4000/getAllTweets/@shubhangi");
      const resultTweets = await responseTweets.json();
      console.log(profile);
      setTweets(resultTweets.map(tweet => {
        tweet.profilePicture = resultProfile.profilePicture;
        tweet.userName = resultProfile.username;
        return tweet;
      }));
    }
    fetchData();
  },[])

  return (
    <div>
      <Navbarr />
      <Profilestats tweetCount={tweetCount} profile={profile}/>
      <div class="container-fluid m-0 p-0">
        <div class="row">
          <div class="col p-0">
            <ProfileInfo profile={profile} />
          </div>
          <div class="col p-0">
            <NewTweet setTweets={addNewTweet} profile={profile}/>
            {
              tweets.map(item => {
                return <TweetCard tweetProps={item}/>
              })
            }
          </div>
          <div class="col p-0 rightPanel">
            <Rightpanel/>

          </div>
        </div>
      </div>
    </div>
  )
}
export default App;