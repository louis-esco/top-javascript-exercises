// const findTheOldest = function (arr) {
//     return arr
//         .sort(function (a, b) {
//             const currentYear = new Date().getFullYear();
//             if (a.yearOfDeath === undefined) {
//                 return (b.yearOfDeath - b.yearOfBirth) - (currentYear - a.yearOfBirth);
//             } else if (b.yearOfDeath === undefined) {
//                 return (currentYear - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
//             } else {
//                 return (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth);
//             }
//         })
//         .shift();
// };

const findTheOldest = function (arr) {
    return arr.reduce((accumulator, item) => {
        const currentYear = new Date().getFullYear();
        if (accumulator.yearOfDeath === undefined) {
            if ((item.yearOfDeath - item.yearOfBirth) > (currentYear - accumulator.yearOfBirth)) {
                return item;
            } else {
                return accumulator;
            }
        } else if (item.yearOfDeath === undefined) {
            if ((currentYear - item.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) {
                return item;
            } else {
                return accumulator;
            }
        } else {
            if ((item.yearOfDeath - item.yearOfBirth) > (accumulator.yearOfDeath - accumulator.yearOfBirth)) {
                return item;
            } else {
                return accumulator;
            }
        }
    });
};

// Do not edit below this line
module.exports = findTheOldest;
