const reverseString = function(string) {
    
    let stringToArray = string.split("");
    let reversedString = '';

    if (string === '') {
        return reversedString;
    } else {
        while (stringToArray.length !== 0) {
            reversedString += stringToArray.pop();
        }
    }

    return reversedString;
    
}

// Do not edit below this line
module.exports = reverseString;