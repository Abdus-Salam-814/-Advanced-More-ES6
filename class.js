const products = [
            {id: 1, name: 'Lenovo', price: 65000},
            {id: 2, name: 'Dell', price: 55000},
            {id: 3, name: 'HP', price: 40000},
            {id: 4, name: 'Mac', price: 150000}
            
]

//similar

// class product{
//     speak(talk){
//         console.log(`Talking about ${talk}`)
//     }
// }


// const lenovo = new product();
// // console.log(lenovo);

// lenovo.speak('Oba kita kau');



// class product{
//     country = 'Bangladesh';
//     constructor(name){
//         this.name = name;
//     }
//     speak(talk){
//         console.log(`talking about ${talk}`)
//     }
    
// }

// const lenovo = new product('Le Le Lenovo');
// console.log(lenovo);


class teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('Sir is teaching Math')
    }
}

const tapon = new teacher('Tapon Sir', 'Physics')
const rasid = new teacher('Raid Sir', 'English')

// console.log(tapon);
console.log(rasid);

