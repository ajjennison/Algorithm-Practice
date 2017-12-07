//This function takes an array with of integers and returns the summation of the range from the lowest integer to the highest integer.
function sumAll(arr) {
    let sum = 0;
    let lowerBound = Math.min(...arr);
    let upperBound = Math.max(...arr);

    for (let i = lowerBound; i <= upperBound; i++) {
        sum += i;
    }

    return sum;
}

//Expected output: 10
sumAll([1, 4]);

//Expected output: 21
sumAll([1, 2, 4, 6]);

//Expected output: 0
sumAll([-5, 5]);