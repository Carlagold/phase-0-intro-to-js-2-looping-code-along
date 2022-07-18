// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//   }

// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }

// wrapGifts(gifts);

const names = ["Guadalupe", "Ollie", "Aki"];
const eventName =["surprise"];
const newWriteCards = [];
function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        newWriteCards.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }

    return newWriteCards;
}

function countDown(intNumber) {
if (intNumber >=1) {
    let i = 11;
    while (i > 0) {
        i--;
        console.log(i);
        }
    }
}
countDown(10);