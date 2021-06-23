import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  updateLoggedInUserFollowing,
  updateFollowedUserFollowers,
} from "../../services/firebase";
import "./sidebar.css";

const SuggestedProfile = ({
  userDocId,
  username,
  profileId,
  userId,
  loggedInUserId,
  profileDocId,
}) => {
  const [followed, setFollowed] = useState(false);

  async function handleFollowUser() {
    setFollowed(true);

    await updateLoggedInUserFollowing(loggedInUserId, profileId, false);

    await updateFollowedUserFollowers(profileDocId, userId, false);
  }

  return (
    <div>
      {!followed ? (
        <div className="suggestions-div">
          <div className="profile-pic-div">
            <img src="https://storage.pixteller.com/designs/designs-images/2016-11-19/02/thumbs/img_page_1_58305b35ebf5e.png" />

            <Link to={`/p/${username}`} className="username">
              <h4>{username}</h4>
            </Link>
          </div>
          <div className="user-follow-div">
            <button
              className="follow-button"
              onClick={() => handleFollowUser()}
            >
              Follow
            </button>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default SuggestedProfile;
