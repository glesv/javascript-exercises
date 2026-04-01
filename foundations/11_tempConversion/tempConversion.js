const convertToCelsius = function (farTemp) {
  let res = (((farTemp - 32) * 5) / 9).toFixed(1);
  return Number(res);
};

const convertToFahrenheit = function (celTemp) {
  let res = ((celTemp * 9) / 5 + 32).toFixed(1);
  return Number(res);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
