import React from "react";
import "./sidebar.css";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestion from "./sugggestion";

const Sidebar = () => {
  const {
    user: { fullName, username, userId, following },
  } = useUser();
  console.log(fullName, username, userId, following);
  return (
    <div>
      Sidebar
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} following={following} />
    </div>
  );
};

Sidebar.whyDidYouRender = true;
export default Sidebar;
