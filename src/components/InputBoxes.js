import React from "react";
import "./InputBoxes.css";

const InputBoxes = (props) => {
  return (
    <React.Fragment>
      <div className="inputBoxes">
        <div>
          Latitude
          <input
            type="text"
            value={props.latitude}
            onChange={props.handleLatitude}
          />
        </div>
        <div>
          Longitude
          <input
            type="text"
            value={props.longitude}
            onChange={props.handleLongitude}
          />
        </div>
      </div>
      <button onClick={props.onButtonClick}>Submit</button>
    </React.Fragment>
  );
};

export default InputBoxes;
