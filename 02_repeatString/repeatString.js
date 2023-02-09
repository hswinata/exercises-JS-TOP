const repeatString = function(string, n) {
    if (n < 0) return 'ERROR';
    let endString = '';
    for (let i=0; i<n; i++) {
        makeToString = string.toString();
        endString += makeToString;
    } 
    return endString;
};

repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
