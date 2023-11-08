//Dato un oggetto person con le proprietà nome ed età, utilizza la destrutturazione
// dell'oggetto per creare variabili nome ed età che contengano i valori dell'oggetto.
const person = { name: "Alice", age: 30 };


const {age, name} = person
console.log(name);
console.log(age);

//const { name: ciao } = person
//console.log(ciao)
//mi dara pure alice