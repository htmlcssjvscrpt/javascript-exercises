const repeatString = function(word, times) {
    let mesg = '';

    if (times === 0) {
        return mesg;
    } else if (times < 0) {
        return "ERROR";
    } else if (word === '') {
        return mesg;
    } else {
        for (let i = 0; i < times; i++) {
            mesg += word;
        }
    }
    return mesg;
};

// Do not edit below this line
module.exports = repeatString;
