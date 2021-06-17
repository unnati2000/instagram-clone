import { memo } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const User = ({ username, fullName }) => {
  return (
    <div>
      {!username || !fullName ? (
        <Skeleton count={1} height={61} />
      ) : (
        <Link to={`/p/${username}`} className="profile">
          <div className="profile-img">
            <img
              src="https://1.bp.blogspot.com/-2rmt55p4Jgc/XmSUgHGmaaI/AAAAAAAAPRw/rF-e1cRuLEI7AnWw-gMsMsEc1irlJuhWwCLcBGAsYHQ/s1600/Lovely%2BDP%2BFor%2BWhatsapp%2BProfile%2B%2B%252823%2529.jpg"
              height="50"
              width="50"
              className="profile-pic"
            />
          </div>
          <div className="profile-name">
            <p className="profile-username">{username}</p>
            <p>{fullName}</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default memo(User);
