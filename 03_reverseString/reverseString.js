const reverseString = function(string) {
    let newString = '';
    for (let i = 1; i <= string.length; i++) {
        newString += string.charAt(string.length-i);
    }
    return newString;
};

/*Steps
0. Create a variable container for the newString.
1. turn everything toString()
2. Take the last position of the string and print it as first.
*/

//With Array Method


// Do not edit below this line
module.exports = reverseString;