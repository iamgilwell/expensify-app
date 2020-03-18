const nameVar = 'Andrew';
// const nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
console.log('nameCOnst', nameConst);

function getPetName() {
  var petName = 'Hal';
  return petName;
}

const petName = getPetName();
console.log(petName);

// Block Scoping

const fullName = 'Gilwell Muhati';
let firstName = '';

if (fullName) {
  const firstName = fullName.split(' ')[0];
  console.log(firstName);
}
console.log(firstName);
