// Steup constructor to take name and ag ( default to 0)
// getDescription -> Gilwell Muhati is 30 year(s) old

class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }
  getGreeting() {
    return `Hi. I am ${this.name} !`;
  }
  getDescription() {
    return `Hi. ${this.name} is ${this.age} years old`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();
    if (this.hasMajor()) {
      description += `Their major is ${this.major}`;
    }
    return description;
  }
}

class Traveller extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
    if (this.homeLocation) {
      greeting += ` I'm visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

// Traveller -> Person
// Add Support for homeLocation
// Override getGreeting
// 1. Hi. Iam Gilwell Muhati, I'm vissiting from Kenya
// 2. Hi. I am Gilwell Muhati

const me = new Traveller('Gilwell Muhati', 30, 'Nairobi');
console.log(me.getGreeting());

const other = new Traveller(undefined, undefined, 'NoWhere');
console.log(other.getGreeting());
