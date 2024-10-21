import { coordinates, APIkey } from "../../utils/constants";
import { React, useEffect, useState, useContext } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import Profile from "../Profile/Profile";

import ItemModal from "../ItemModal/ItemModal";
import AddItemModal from "../AddItemModal/AddItemModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { getItems, addItem, deleteItem } from "../../utils/api";
import * as auth from "../../utils/auth";
import EditProfileModal from "../EditProfileModal/EditProfileModal";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 1000 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [currentUser, setCurrentUser] = useState({
    name: "",
    avatar: "",
  });

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  const handleRegistration = ({ email, password, name, avatar }) => {
    auth
      .register({ email, password, name, avatar })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        setCurrentUser({ name: res.name, avatar: res.avatar });
        closeActiveModal();
      })
      .catch(console.error);
  };

  const handleLogin = ({ email, password }) => {
    if (!email || !password) {
      return;
    }
    return auth
      .authorize({ email, password })
      .then((res) => {
        setIsLoggedIn(true);
        localStorage.setItem("jwt", res.token);
        setCurrentUser({ name: res.name, avatar: res.avatar });

        navigate("/profile");
        closeActiveModal();
      })
      .catch(console.error);
  };

  const token = localStorage.getItem("jwt");
  // localStorage.removeItem("jwt");

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("create");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRegisterClick = () => {
    setActiveModal("signUp");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleLogoutClick = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
  };

  const handleUpdateClick = () => {
    setActiveModal("editProfile");
  };

  const onAddItem = (item) => {
    addItem(item, token)
      .then((item) => {
        setClothingItems([item, ...clothingItems]);
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to add clothing item", err);
      });
  };

  const openConfirmationModal = () => {
    setActiveModal("delete");
  };

  const handleCardDelete = (card) => {
    deleteItem(card, token)
      .then(() => {
        setClothingItems(
          clothingItems.filter((item) => {
            return item !== card;
          })
        );
        closeActiveModal();
      })
      .catch((err) => {
        console.error("Failed to delete clothing item", err);
      });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  const [clothingItems, setClothingItems] = useState([]);

  useEffect(() => {
    getItems()
      .then((items) => {
        setClothingItems(items.data.reverse());
      })
      .catch((err) => {
        console.error("Failed to receive clothing items", err);
      });
  }, []);

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      return;
    }
    auth
      .checkToken(token)
      .then((res) => {
        setIsLoggedIn(true);
        setCurrentUser({ name: res.data.name, avatar: res.data.avatar });
      })
      .catch(console.error);
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <div className="page__content">
            <Header
              handleAddClick={handleAddClick}
              weatherData={weatherData}
              isLoggedIn={isLoggedIn}
              handleLoginClick={handleLoginClick}
              handleRegisterClick={handleRegisterClick}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <Main
                    weatherData={weatherData}
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                  />
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute isLoggedIn={isLoggedIn}>
                    <Profile
                      handleCardClick={handleCardClick}
                      handleAddClick={handleAddClick}
                      handleUpdateClick={handleUpdateClick}
                      handleLogoutClick={handleLogoutClick}
                      clothingItems={clothingItems}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/profile" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
                }
              />
            </Routes>
            <Footer />
          </div>
          {activeModal === "signUp" && (
            <RegisterModal
              isOpen={activeModal === "signUp"}
              onClose={closeActiveModal}
              handleLoginClick={handleLoginClick}
              onSubmit={handleRegistration}
            />
          )}

          {activeModal === "login" && (
            <LoginModal
              isOpen={activeModal === "login"}
              onClose={closeActiveModal}
              handleRegisterClick={handleRegisterClick}
              onSubmit={handleLogin}
            />
          )}

          {activeModal === "create" && (
            <AddItemModal
              onClose={closeActiveModal}
              onAddItem={onAddItem}
              isOpen={activeModal === "create"}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              isOpen={activeModal === "preview"}
              card={selectedCard}
              onClose={closeActiveModal}
              openConfirmationModal={openConfirmationModal}
            />
          )}
          {activeModal === "delete" && (
            <ConfirmationModal
              isOpen={activeModal === "delete"}
              card={selectedCard}
              onClose={closeActiveModal}
              handleCardDelete={handleCardDelete}
            />
          )}
          {activeModal === "editProfile" && (
            <EditProfileModal
              isOpen={activeModal === "editProfile"}
              onClose={closeActiveModal}
              onSubmit={handleProfileUpdate}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}
export default App;
