function reverseString(string) {
 /* split sitring into an array */
    const letters = string.split("");
 /* reverse order of the array */
    const reversed = letters.reverse();
    /* convert the array back into a string */
    const final = reversed.join("");
    return final;
};

// Do not edit below this line
module.exports = reverseString;
