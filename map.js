// const numbers = [4, 5, 2, 8, 10];



//  const doubled = [];

//   for(const num of numbers){
//  const double = num * 2;
//  doubled.push()

//  console.log(double);
// }

// // i selfe . factis
/* 
const doubled = [];


for(const num of numbers){
    const double = num * 2;
    doubled.push(double);

    console.log(double, doubled)
}

console.log(doubled)


*/

/*
const doubled = [];
for(const num of numbers){
    const double = num * 2;

    doubled.push(double);
    console.log(double);
}

console.log(doubled);



*/

/*

const numbers = [4, 5, 2, 8, 10]

function doubleIt(num){
    return num * 2;
}


const result = numbers.map(doubleIt);

console.log(result);


*/



const numbers = [4, 5, 2, 8, 10];
function doubleIt(num){
    console.log(`New number ${num}`)

    return num * 2;

}


const result = numbers.map(doubleIt);

console.log(result);

console.log('================2================');

const double2 = n => n * 2;

const output = numbers.map(double2);
console.log(output);
console.log('================3================');

const output2 = numbers.map(num => num * 2);
console.log(output2);

