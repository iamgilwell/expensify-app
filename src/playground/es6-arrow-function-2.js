// arguments object - no longer bound with arrow functions
const add = (a, b) => {
  //   console.log(arguments);
  return a + b;
};
console.log(add(55, 11, 99));

/// this keyword - no longer bound

const user = {
  name: 'Gilwell',
  cities: ['Nairobi', 'Mombasa', 'Kakamega'],
  printPlacesLived() {
    return this.cities.map(city => this.name + ' has lived in ' + city);

    // this.cities.forEach(city => {
    //   console.log(this.name + 'has lived in ' + city);
    // });
  }
};
console.log(user.printPlacesLived());

// Challenge Area
const multiplier = {
  // numbers - array of numbers
  // multiplyBy  - single number
  // multiply - return a new array where the numbers have been multiplied
  numbers: [10, 50, 200, 56, 4, 44, 33, 22],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
