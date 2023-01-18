// Destructuring "manuale"
const person = {
    firstName: 'Elia',
    lastName: 'Mancini',
    age: 29,
};

console.log(person);

let firstName = person.firstName;
let lastName = person.lastName;
let age = person.age;

console.log(firstName, lastName, age);

// Destructuring ES6
const student = {
    name: 'Paolo',
    age: 30,
    email: 'paolo@email.it',
};
//                  city non esiste come chiave e quindi da undefined
const {name, email, city} = student;
console.log(name, email, city);