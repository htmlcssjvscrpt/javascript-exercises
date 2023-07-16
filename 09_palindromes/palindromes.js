const palindromes = function (string) {
    let lowerCaseString = string.toLowerCase();
    let stringToArray = lowerCaseString.split("");
    let isPalindrome = true; //add a flag variable

    for (let i = 0; i < stringToArray.length; i++) {
        if (!(/^[A-Za-z]$/.test(stringToArray[i]))) {
            stringToArray.splice(i, 1);
            i--;
        }
    }

    for (let i = 0; i < stringToArray.length; i++) {
        if (stringToArray[i] !== stringToArray[stringToArray.length - 1 -i]) {
            isPalindrome = false; // set the flag to false if a non-matching pair is found
            return false;
            break;
        } 
    }

    if (isPalindrome) { // Only alert "true" if the flag is still true after the loop
        return true;
    }
}
    
// Do not edit below this line
module.exports = palindromes;