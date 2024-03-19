const removeFromArray = function (array, ...remove) {
    let filteredArray = array;
    for (const toRemove of remove) {
        filteredArray = filteredArray.filter(function (item) {
            return item !== toRemove;
        })
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
