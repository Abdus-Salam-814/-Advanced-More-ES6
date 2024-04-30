// Orginal odd array

const oddArray = [1, 3, 5, 7, 9];

//  Convert odd-Array to Even-Array with foor of Loop
const evenArrayLoop = []

for(const number of oddArray){
    evenArrayLoop.push(number + 1)
}

console.log(evenArrayLoop);

const evenArrayLoopToOdd = [];

for(numberEven of evenArrayLoop){
    evenArrayLoopToOdd.push(numberEven - 1);
}

console.log(evenArrayLoopToOdd);

const evenArrayMap = evenArrayLoopToOdd.map(num => num + 1);

console.log(evenArrayMap);