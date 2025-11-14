const convertToCelsius = function(fahrenheit) {
  let celsius = "";
  celsius = (fahrenheit-32)*(5/9);
  let roundedC = Math.round(celsius * 10) / 10;
  return roundedC;
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = "";
  fahrenheit = (celsius*(9/5))+32;
  let roundedF = Math.round(fahrenheit * 10) / 10;
  return roundedF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
