import React from 'react';
import Profilecover from './profilecover';

const Profilestats = ({profile, tweetCount}) => {

    return (
        <div>

            
            <div class=" profile">
            <Profilecover/>

<div class="profileStats">
                <div class="profilePhoto">
                    <img src={profile.profilePicture} class="profilepic"></img>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Tweet</th>
                            <th scope="col">Followings</th>
                            <th scope="col">Followers</th>
                            <th scope="col">Likes</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td scope="row">{tweetCount}</td>
                            <td>{profile.following}</td>
                            <td>{profile.follower}</td>
                            <td>{300}</td>
                        </tr>
                    </tbody>
                </table>

            </div>
            </div>
        </div>

    )
}

export default Profilestats;