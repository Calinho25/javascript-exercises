function removeFromArray (arr, num) {
    var index = 0;
    while (index < arr.length) {
        if (arr[index]===num) {
            arr.splice(index, 1);
        } else {
            ++index;
        }
    }
    return arr;
};
const arr = [1,2,3,4];
/* identify where a certain number is within an array wiht an array method*/
/* remove the number from the array*/

// Do not edit below this line
module.exports = removeFromArray;
