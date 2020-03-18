// const square = function(x) {
//   return x * x;
// };

// console.log(square(8));

// // const squareArrow = x => {
// //   return x * x;
// // };

// // console.log(squareArrow(9));

// const squareArrow = x => x * x;

// console.log(squareArrow(10));

// Challenge - Use Arrow Functions

// getFirstName('Mike Smith) -> "Mike"
// Create regular arrow function
// Create arrow funnction using shorthand syntax

const getFirstName = function(fullName) {
  const firstname = fullName.split(' ')[0];
  return firstname;
};

console.log(getFirstName('Gilwell Muhati'));

const getFirstName1 = fullName => {
  return fullName.split(' ')[0];
};

console.log(getFirstName1('Valerie Munini'));

const getFirstName3 = fullName => fullName.split(' ')[0];
console.log(getFirstName3('John Doe'));
