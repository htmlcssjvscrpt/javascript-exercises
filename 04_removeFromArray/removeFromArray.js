const removeFromArray = function() {
    if (arguments.length !== 0) {
        let index = [];
        const arr = Array.from(arguments[0]);
        for (let i = 1; i < arguments.length; i++) {
            const index = arr.indexOf(arguments[i]);
            arr.splice(index, 1);
        }
    // return arr;
    alert(arr);
    } else {
        return "ERROR";
      }
};

removeFromArray([1, 2, 3, 4], 4, 3, 1);

// Do not edit below this line
// module.exports = removeFromArray;
