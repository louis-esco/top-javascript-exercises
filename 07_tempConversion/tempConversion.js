const convertToCelsius = function (degF) {
  let degC = Math.round(((degF - 32) * (5 / 9)) * 10) / 10;
  return degC;
};

const convertToFahrenheit = function (degC) {
  let degF = Math.round((degC * 9 / 5 + 32) * 10) / 10;
  return degF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
