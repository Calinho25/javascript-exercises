const sumAll = function(a, b) {
    let sum = 0
/* identify all the integers within a range*/
for (let index = a; index <= b; index++) {
    /* add them todether*/
    sum+=index;
}
return sum;
};

// Do not edit below this line
module.exports = sumAll;
