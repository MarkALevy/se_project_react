import { coordinates, APIkey } from "../../utils/constants";
import { useEffect, useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import ItemModal from "../ItemModal/ItemModal";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import Footer from "../Footer/Footer";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999 },
    city: "",
  });
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [selectedWeatherType, setSelectedWeatherType] = useState("");

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const closeActiveModal = () => {
    setActiveModal("");
  };

  const handleRadioButtonClick = () => {
    const hotBtn = document.getElementById("hot");
    const warmBtn = document.getElementById("warm");
    const coldBtn = document.getElementById("cold");
    if (hotBtn.checked) {
      setSelectedWeatherType("hot");
    } else if (warmBtn.checked) {
      setSelectedWeatherType("warm");
    } else if (coldBtn.checked) {
      setSelectedWeatherType("cold");
    }
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <div className="page__content">
        <Header handleAddClick={handleAddClick} weatherData={weatherData} />
        <Main weatherData={weatherData} handleCardClick={handleCardClick} />
        <Footer />
      </div>
      <ModalWithForm
        buttonText="Add garment"
        title="New garment"
        activeModal={activeModal}
        onClose={closeActiveModal}
      >
        <label htmlFor="name" className="modal__label">
          Name{" "}
          <input
            type="text"
            className="modal__input"
            id="name"
            placeholder="Name"
          />
        </label>
        <label htmlFor="imageURL" className="modal__label">
          Image{" "}
          <input
            type="url"
            className="modal__input"
            id="imageURL"
            placeholder="Image URL"
          />
        </label>
        <fieldset
          className="modal__radio-buttons"
          onClick={handleRadioButtonClick}
        >
          <legend className="modal__legend">Select the weather type:</legend>
          <label
            htmlFor="hot"
            className={`modal__label modal__label_type_radio   ${
              selectedWeatherType === "hot" && "modal__radio-input__selected"
            }`}
          >
            <input
              type="radio"
              className="modal__radio-input"
              name="radio-btn"
              id="hot"
            />
            Hot
          </label>
          <label
            htmlFor="warm"
            className={`modal__label modal__label_type_radio   ${
              selectedWeatherType === "warm" && "modal__radio-input__selected"
            }`}
          >
            <input
              type="radio"
              className="modal__radio-input"
              name="radio-btn"
              id="warm"
            />
            Warm
          </label>
          <label
            htmlFor="cold"
            className={`modal__label modal__label_type_radio   ${
              selectedWeatherType === "cold" && "modal__radio-input__selected"
            }`}
          >
            <input
              type="radio"
              className="modal__radio-input"
              name="radio-btn"
              id="cold"
            />
            Cold
          </label>
        </fieldset>
      </ModalWithForm>
      <ItemModal
        activeModal={activeModal}
        card={selectedCard}
        onClose={closeActiveModal}
      />
    </div>
  );
}

export default App;
