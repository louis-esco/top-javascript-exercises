const reverseString = function (string) {
    const stringArray = string.split("");
    const reverseArray = stringArray.reverse();
    const joinedArray = reverseArray.join("");
    return joinedArray;
};

// Do not edit below this line
module.exports = reverseString;
