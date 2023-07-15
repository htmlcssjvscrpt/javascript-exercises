const convertToCelsius = function(degrees) {
    let conversion = (degrees - 32) * 5/9;
    rounded = Math.round(conversion * 10) / 10;
    return conversion;
    // alert(rounded);

};

const convertToFahrenheit = function(degrees) {
    let conversion = degrees * 9/5 + 32;
    rounded = Math.round(conversion * 10) / 10;
    return conversion;
    // alert(rounded);
};

// convertToCelsius(-100);
// convertToFahrenheit(-10);


// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
