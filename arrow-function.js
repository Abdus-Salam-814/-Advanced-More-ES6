// arrow function
// sestructring and spred operator
const square = x => x * x;

const genaretSquare = square(9);

console.log(genaretSquare);

const sum = (a, b) => a + b;

const Getsum = sum(22, 8);
console.log(Getsum);

const {age, z, ...other} = {x: 2, y: 5, z: 3, name: 'ovijeet', age: 55};

console.log(other);