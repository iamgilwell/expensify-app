//
// Object Desctructing
//

// const person = {
//     name: 'Gilwell Muhati',
//     age: 26,
//     location: {
//         city: 'Nairobi',
//         temp: 88
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}`);

// const { city, temp: temperature } = person.location;

// if (city && temperature) {
//     console.log(`Its's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher


// if (publisherName) {
//     console.log(publisherName); // Penguin, Self-Published
// }


//
// Array Destructuring
//

// const address = ['1299 S Juniper Street', 'Nairobi', 'Kenya', '2172'];
// const [, city,] = address
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$3.00', '$3.50', '$3.75']
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);

