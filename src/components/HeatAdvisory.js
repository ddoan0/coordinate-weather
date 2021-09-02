const HeatAdvisory = (props) => {
  return (
    <div>
      {props.futureDays.length > 0 ? "HEAT ADVISORY" : ""}
      <ul>
        {props.futureDays.map((obj) => (
          <li key={obj.number}>{obj.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default HeatAdvisory;
