// const orginalArray =  [33, 50, 79, 78, 90, 101, 30 ];


// const divisibleBy10Using = orginalArray.filter(p => p % 10 === 0);

// console.log(divisibleBy10Using);



// Original array
const numbers = [33, 50, 79, 78, 90, 101, 30];

// Find the first element divisible by 10
const firstDivisibleBy10 = numbers.find(number => number % 10 === 0);

console.log(firstDivisibleBy10); // Output: 50


const firstEvenNumber = numbers.find(num => num % 10 === 0);

console.log(firstEvenNumber);