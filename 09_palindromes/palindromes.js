const palindromes = function (text) {
    let replaced = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s/g, "");
    let reversed = replaced.split("").reverse().join("");
    return replaced.toUpperCase() === reversed.toUpperCase();
};

// Do not edit below this line
module.exports = palindromes;
