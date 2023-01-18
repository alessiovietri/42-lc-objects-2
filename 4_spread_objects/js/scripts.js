const person = {
    firstName: 'Paolo',
    lastName: 'Rapuano',
    age: 32
};

console.log('PERSON 1', person);

// Questa operazione non mi crea un nuovo oggetto, ma mi copia semplicemente il riferimento all'oggeto definito in person
const personTwo = person;

console.log('PERSONTWO 1', personTwo);

// Questa operazione mi crea un nuovo oggetto con le stesse chiavi e gli stessi valori dell'oggetto definito in person
const personThree = {
    firstName: person.firstName,
    lastName: person.lastName,
    age: person.age
};

console.log('PERSONTHREE 1', personThree);

// Questa operazione mi crea un nuovo oggetto con le stesse chiavi e gli stessi valori dell'oggetto definito in person e mi aggiunge anche la chiave email
const personFour = {...person, email: 'paolo.rapuano@boolean.careers'};

console.log('PERSONFOUR 1', personFour);

// Questa operazione modifica sia person che personTwo, ma non personThree e personFour (perché sono oggetti diversi)
person.firstName = 'Giuseppe';
person.lastName = 'Bisconti';
person.age = 24;

console.log('PERSON 2', person);
console.log('PERSONTWO 2', personTwo);
console.log('PERSONTHREE 2', personThree);
console.log('PERSONFOUR 2', personFour);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
// Unisco due array grazie all'operatore spread
const fullArr = [...arr1, ...arr2];
const fullArrTwo = [...arr2, 7, 8, 9];

console.log(fullArr);
console.log(fullArrTwo);












