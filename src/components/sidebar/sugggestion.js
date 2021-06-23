import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import SuggestedProfile from "./suggested-profile";

const Suggestion = ({ userId, following, loggedInUserDocId }) => {
  const [profiles, setProfiles] = useState(null);

  console.log(userId, following);
  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    suggestedProfiles();
  }, [userId]);

  console.log(profiles);

  return !profiles ? (
    <Skeleton count={5} height={150} />
  ) : profiles?.length > 0 ? (
    <div>
      <h1 className="suggestion-header">Suggestions for you</h1>
      <div>
        {profiles?.map((profile) => (
          <SuggestedProfile
            key={profile.docId}
            profileDocId={profile.docId}
            username={profile.username}
            profileId={profile.userId}
            userId={userId}
            loggedInUserDocId={loggedInUserDocId}
          />
        ))}
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default Suggestion;
