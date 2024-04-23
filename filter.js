const numbers = [1, 5, 6, 4, 15];
const players = [75, 65, 67, 72, 55,59];

// const selected = players.filter(p => p > 70);
/*
Output: 
 PS C:\My project\(Advanced) More ES6> node filter.js
[ 75, 72 ]

*/

// const selected = players.filter(p => p > 70);
// const selected = players.filter(p => p > 80);
const selected = players.filter(p => p > 50);
console.log(selected);



const friends = ['Tom', 'Johon', 'Micheal', 'Oliver', 'Joshna'];
const oddFriends = friends.filter(friend => friend.length >= 4);
console.log(oddFriends);

