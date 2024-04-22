 const user = {
    id: 5001,
    name: 'Soriful Raj',
    address: {
        street: {
            first: '54/1 uttor side',
            second: 'poribag er goli',
            third: 'nodorai'
        },
        city: 'dhaka'
    }
 }

//  console.log(user)
//  console.log(user.address)
//  console.log(user.address.street)
//  console.log(user.address.street.first)
//  console.log(user.address.street.second)

const user2 = {
    id: 55950,
    name: 'pori bibir majar',
    address: {
        city: 'chittagong',
        country: 'Bangladesh'
    }
}
console.log(user.address.street?.second)

 console.log(user2.address.street?.second)
