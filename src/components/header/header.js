import React, { useContext } from "react";
import FirebaseContext from "../../context/firebase";
import UserContext from "../../context/user";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const { firebase } = useContext(FirebaseContext);
  const { user } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo">
        <h2>Instagram</h2>
      </div>
      <div className="links">
        {user ? (
          <>
            <Link to="/" className="dashboard link">
              <i class="fas fa-home"></i>
            </Link>
            <button
              className="link logout"
              onClick={() => firebase.auth().signOut()}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  firebase.auth().signOut();
                }
              }}
            >
              <i class="fa fa-sign-out"></i>
            </button>
            <Link to={"/p/" + user.displayName} className="link">
              <img
                src="https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg"
                height="35"
                width="35"
                className="profile-pic"
              />
            </Link>
          </>
        ) : (
          <>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
