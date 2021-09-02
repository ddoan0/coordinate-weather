function isValid(coordinate) {
  if (isNaN(Number(coordinate)) || coordinate === "") {
    console.log("Please enter a valid number");
    return false;
  } else {
    return true;
  }
}

module.exports = isValid;
