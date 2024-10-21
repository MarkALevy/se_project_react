import { useContext } from "react";
import "./SideBar.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
function SideBar({ handleUpdateClick, handleLogoutClick }) {
  const currentUser = useContext(CurrentUserContext);
  const userName = currentUser.name;
  const avatar = currentUser.avatar;
  return (
    <div className="sidebar">
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
      <button
        type="button"
        className="sidebar__update-user-btn"
        onClick={handleUpdateClick}
      >
        Change profile data
      </button>
      <br />
      <button
        type="button"
        className="sidebar__logout-btn"
        onClick={handleLogoutClick}
      >
        Log out
      </button>
    </div>
  );
}

export default SideBar;
