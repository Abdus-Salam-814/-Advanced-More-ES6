// Original odd array
const oddArray = [1, 3, 5, 7, 9];

// Create an empty even array
let evenArray = [];

// Loop through each element in the odd array
for (let i = 0; i < oddArray.length; i++) {
    // Add 1 to each odd number to make it even
    evenArray.push(oddArray[i] + 1);
}

console.log(evenArray); // Output: [2, 4, 6, 8, 10]


// Original odd array
const oddArray2 = [1, 3, 5, 7, 9];

// Use map to add 1 to each element in the odd array
const evenArray2 = oddArray.map(number => number + 1);

console.log(evenArray2); // Output: [2, 4, 6, 8, 10]
