import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SideBar() {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser.name;
  const avatar = currentUser.avatar;
  return (
    <div className="sidebar__user-container">
      {avatar ? (
        <img src={avatar} alt={userName} className="sidebar__avatar" />
      ) : (
        <div className="sidebar__placeholder">
          {userName ? userName[0] : ""}
        </div>
      )}

      <p className="sidebar__user-name">{userName}</p>
    </div>
  );
}

export default SideBar;
