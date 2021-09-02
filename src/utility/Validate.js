function isValid(coordinate) {
  if (isNaN(Number(coordinate)) && coordinate[0] !== "-") {
    console.log("Please enter a valid number");
    return false;
  } else {
    return true;
  }
}

module.exports = isValid;
