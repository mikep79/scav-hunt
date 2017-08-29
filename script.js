console.log('srced');

// Create a function that takes an array of numbers and returns the mean average 
// (fixed to two decimal places).
// Rules
// Return mean average.
// Round to two decimal places.

function average(arr) {
    var sum = 0; var i = 0; var aver = 0;   // declare var's.
    while (i < arr.length) {                // loop through array
        sum += arr[i];                  
        i++;
    }
    aver = sum/arr.length;                  // figure average
    aver2Dec = aver.toFixed(2);             // round to 2 decimals
    return aver2Dec;                        
}

var noArr = [1.333, 4.32323, 34324, -100000001];
var noArr2 = [4,5,6,7,8,10];

console.log(average(noArr));
console.log(average(noArr2));
