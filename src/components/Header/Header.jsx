import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import { Link } from "react-router-dom";
import { useContext } from "react";
import "./Header.css";
import logo from "../../assets/Logo.svg";

import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Header({
  handleAddClick,
  weatherData,
  isLoggedIn,
  handleLoginClick,
  handleRegisterClick,
}) {
  const currentUser = useContext(CurrentUserContext);

  const userName = currentUser?.name;
  const avatar = currentUser?.avatar;

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <Link to="/">
        <img alt="Logo" src={logo} className="header__logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      {isLoggedIn ? (
        <div className="header__logged-in">
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__profile-link">
            <div className="header__user-container">
              <p className="header__user-name">{userName}</p>
              {avatar ? (
                <img src={avatar} alt={userName} className="header__avatar" />
              ) : (
                <div className="header__placeholder">
                  {userName ? userName[0] : ""}
                </div>
              )}
            </div>
          </Link>
        </div>
      ) : (
        <div className="header__logged-out">
          <button
            type="button"
            className="header__register-btn"
            onClick={handleRegisterClick}
          >
            Sign Up
          </button>
          <button
            type="button"
            className="header__login-btn"
            onClick={handleLoginClick}
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
