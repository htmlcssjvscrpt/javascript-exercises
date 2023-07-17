const fibonacci = function(number) {
    let array = [1, 1, 2];
    let num = number;
    let fin_num = 0;
    let sum = 0;
    for (let i = 3; i === number; i ++) {
        fin_num = array[number -2] + array[number -1 ];
        array.push(fin_num);
    }
    alert(fin_num);
    
};

fibonacci(4);

// Do not edit below this line
// module.exports = fibonacci;
