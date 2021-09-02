import React, { useEffect, useState } from "react";

import InputBoxes from "./components/InputBoxes";
import CityTemp from "./components/CityTemp";
import HeatAdvisory from "./components/HeatAdvisory";
import isValid from "./utility/Validate";
import "./App.css";

const App = () => {
  const [latitude, setLatitude] = useState("32");
  const [longitude, setLongitude] = useState("-84");
  const [temperature, setTemperature] = useState([]);
  const [forecast, setForecast] = useState("");
  const [futureDays, setFutureDays] = useState([]);
  const [info, setInfo] = useState(null);
  const [button, setButton] = useState(true);

  useEffect(() => {
    fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Request failed for latitude and longitude");
      })
      .then((json) => {
        setInfo(json);
        setForecast(json.properties.forecast);
        return fetch(json.properties.forecastHourly);
      })
      .then((result) => result.json())
      .then((resJson) => {
        setTemperature(resJson.properties.periods);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [button, setButton]);

  useEffect(() => {
    fetch(forecast)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Request for future days failed");
      })
      .then((json) => {
        if (json.properties.periods.temperatureUnit === "F") {
          setFutureDays(
            json.properties.periods.filter((obj) => obj.temperature > 85)
          );
        } else {
          setFutureDays(
            json.properties.periods.filter((obj) => obj.temperature > 29.44)
          );
        }
      });
  }, [button, setButton]);

  const handleLatitude = (event) => {
    const latitude = event.target.value;
    if (isValid(latitude)) {
      setLatitude(latitude);
    }
  };

  const handleLongitude = (event) => {
    const longitude = event.target.value;
    if (isValid(longitude)) {
      setLongitude(longitude);
    }
  };

  const onButtonClick = (event) => {
    setButton(!button);
  };

  return (
    <div className="app">
      <p>
        {" "}
        Please enter coordinates within the United States to retrieve weather
        information.
      </p>
      <InputBoxes
        latitude={latitude}
        longitude={longitude}
        handleLatitude={handleLatitude}
        handleLongitude={handleLongitude}
        onButtonClick={onButtonClick}
      />
      <CityTemp info={info} temperature={temperature} />
      <HeatAdvisory futureDays={futureDays} />
    </div>
  );
};

export default App;
