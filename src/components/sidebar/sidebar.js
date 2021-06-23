import React from "react";
import "./sidebar.css";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestion from "./sugggestion";

const Sidebar = () => {
  const {
    user: { docId, fullName, username, userId, following },
  } = useUser();

  return (
    <div>
      Sidebar
      <User username={username} fullName={fullName} />
      <Suggestion
        userId={userId}
        following={following}
        loggedInUserDocId={docId}
      />
    </div>
  );
};

Sidebar.whyDidYouRender = true;
export default Sidebar;
