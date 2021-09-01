import React, { useEffect, useState } from "react";
import { DateTime } from "luxon";

const App = () => {
  const [latitude, setLatitude] = useState('32');
  const [longitude, setLongitude] = useState('-84');
  const [temperature, setTemperature] = useState(0);
  const [info, setInfo] = useState(null);
  const [button, setButton] = useState(true);

  //TO-DO: YUP FOR VALIDATION
  //TO-DO: USEFETCH FOR FETCH
  //TO-DO: JEST FOR UNIT TESTS
  //TO-DO: PRETTIFY

  useEffect(() => {
    fetch(`https://api.weather.gov/points/${latitude},${longitude}`)
      .then(res => {
        if(res.ok) {
          return res.json();
        }
        throw new Error('Request failed');
      })
      .then((json) => {
        setInfo(json);
        return fetch(json.properties.forecastHourly)
        })
      .then(result => result.json())
      .then(resJson => setTemperature(resJson.properties.periods[0].temperature))
      .catch(error => {
        console.error(error);
      });
  }, [button, setButton]);

  const handleLatitude = event => {
    setLatitude(event.target.value);
  };

  const handleLongitude = event => {
    setLongitude(event.target.value);
  }

  const onButtonClick = event => {
    setButton(!button);
  }

  return (
    <div>
      <div>
        Latitude
        <input
          type="text"
          value={latitude}
          onChange={handleLatitude}
        />
      </div>
      
      Longitude
      <input
        type="text"
        value={longitude}
        onChange={handleLongitude}
      />
      <button onClick={onButtonClick}>
        Submit
      </button>
      <div>
        <ul>
          <li>
           City: {info === null ? "loading" : info.properties.relativeLocation.properties.city}
          </li>
          <li>
            State: {info === null ? "loading" : info.properties.relativeLocation.properties.state}
          </li>
          <li>
            Temperature: {temperature}
          </li>
          <li>
            Time Zone:{info === null ? "loading" : info.properties.timeZone}
          </li>
          <li>
            Time: {info === null ? "loading" : DateTime.now().setZone(info.properties.timeZone).toLocaleString(DateTime.TIME_SIMPLE)}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;