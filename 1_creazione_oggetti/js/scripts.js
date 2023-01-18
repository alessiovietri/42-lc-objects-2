// Creo un oggetto in modo semplice
// const student = {
//     firstName: 'Emanuela',
//     lastName: 'Stetsko',
//     age: 22
// };

// console.log(student);

// Creo un oggetto e ne valorizzo le proprietà attraverso delle variabili (costanti)
const firstNameTwo = 'Lucia';
const lastNameTwo = 'Calenda';
const ageTwo = 34;

const studentTwo = {
    firstName: firstNameTwo,
    lastName: lastNameTwo,
    age: ageTwo
};

console.log(studentTwo);

// Creo un oggetto definendone sia le chiavi che i valori attraverso delle variabili
const firstName = 'Giovanni';
const lastName = 'Capelli';
const age = 19;

const studentThree = {
    firstName,
    lastName,
    age
};

console.log(studentThree);

// Creo un oggetto che ha una chiave definita in modo classico e un'altra definita "dinamicamente"
const key = 'lastName';
console.log(studentThree.lastName);
console.log(studentThree['lastName']);
console.log(studentThree[key]);

const person = {
    firstName: 'Gigi',
    [key]: 'Proietti'
};

console.log(person);