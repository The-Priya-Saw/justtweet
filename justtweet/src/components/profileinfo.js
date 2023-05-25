import React from "react";

const ProfileInfo = ({ profile }) => {
  return (
    <div class="profileInfo">
      <div class="profileContainer">
        <div class="userName pb-3">
          <h3>{profile.username}</h3>
        </div>
        <div class="userId pb-1">{profile.userId}</div>
        <div class="userLink pb-1">
          <a href="#">{`http://www.twitter.com/${profile.userId}`}</a>
        </div>
        <div class="userLoc pb-1">{profile.location}</div>
        <div class="joiningDate pb-1">Joined {profile.joiningDate}</div>
        <button
          class="btn btn-primary profileBtn container-fluid ml-0 mt-5 mb-4"
          type="submit"
        >
          Tweet
        </button>

        <div class="media container">
          <p> 1,232 photos and videos</p>
          <div class="row">
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
          </div>
          <div class="row">
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
            <div class="col">
              {" "}
              <img src="https://www.worldofwalt.com/wp-content/uploads/pandora-018.jpg"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
