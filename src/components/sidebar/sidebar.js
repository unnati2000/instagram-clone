import React from "react";
import "./sidebar.css";
import useUser from "../../hooks/use-user";
import User from "./user";
import Suggestion from "./sugggestion";

const Sidebar = () => {
  const {
    user: { fullName, username, userId },
  } = useUser();
  console.log(fullName, username, userId);
  return (
    <div>
      Sidebar
      <User username={username} fullName={fullName} />
      <Suggestion userId={userId} />
    </div>
  );
};

export default Sidebar;
