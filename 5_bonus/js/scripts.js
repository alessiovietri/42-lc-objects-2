const person = {
    firstName: 'Paolo',
    lastName: 'Rapuano',
    age: 32
};

const { firstName, ...other } = person;

// other conterrà un oggetto uguale a questo:
// const newPerson = {
//     lastName: person.lastName,
//     age: person.age
// }

// Ipotesi 1: other conterrà un array che contiene tutti i valori delle chiavi di person, tranne quello di firstName                SBAGLIATA
// Ipotesi 2: other conterrà un array che contiene undefined come unico valore                                                      SBAGLIATA
// Ipotesi 3: other conterrà 3 const chiamate firstName, lastName e age e queste 3 const avranno come valore l'oggetto person       SBAGLIATA
// Ipotesi 4: come 1, ma nell'array ci troviamo anche le chiavi                                                                     SBAGLIATA
// Ipotesi 5: come 1, ma con anche firstName                                                                                        SBAGLIATA
// Ipotesi 6: other conterrà person pari pari                                                                                       SBAGLIATA

// RISULTATO: other conterrà un oggetto che ha come proprietà tutte quelle che non sono state destrutturate prima dell'operatore spread

console.log(firstName);
console.log(other, typeof other);