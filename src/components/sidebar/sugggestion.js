import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";

const Suggestion = ({ userId, following }) => {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function suggestedProfiles() {
      const response = await getSuggestedProfiles(userId, following);
      setProfiles(response);
    }
    suggestedProfiles();
  }, [userId]);

  return !profiles ? (
    <Skeleton count={5} height={150} />
  ) : profiles.length > 0 ? (
    <div></div>
  ) : null;
};

export default Suggestion;
