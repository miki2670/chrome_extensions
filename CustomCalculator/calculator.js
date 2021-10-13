// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

console.log('Kittens of the world, unite as one!');

let prices = document.getElementsByClassName('amount');

let result = 0;

for (let price of prices) {

  result += price;
}