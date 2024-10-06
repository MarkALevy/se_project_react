import "./WeatherCard.css";
import { defaultWeatherOptions, weatherOptions } from "../../utils/constants";

function WeatherCard({ weatherData, currentTemperatureUnit }) {
  const filteredOptions = weatherOptions.filter((option) => {
    return (
      option.day === weatherData.isDay &&
      option.condition === weatherData.condition
    );
  });

  let weatherOption;

  if (filteredOptions.length === 0) {
    weatherOption = defaultWeatherOptions[weatherData.isDay ? "day" : "night"];
  } else {
    weatherOption = filteredOptions[0];
  }

  const temp = weatherData.temp[currentTemperatureUnit];
  const unit = currentTemperatureUnit;

  return (
    <section className="weather-card">
      <p className="weather-card__temp">
        {temp}
        &deg;{unit}
      </p>
      <img
        src={weatherOption?.url}
        alt={`Card showing ${weatherOption?.day ? "day" : "night"} time ${
          weatherOption?.condition
        } weather`}
        className="weather-card__image"
      />
    </section>
  );
}

export default WeatherCard;
