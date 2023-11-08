numbers = [1, 2, 3, 4, 5]

const sum = numbers.reduce((a, number) => a + number, 0)
// a = accumulatore------lo zero sta ad indicare da quale valore "a" deve partire,
//se ad esempio mettesimo 1, il risultato sarebbe 16 e non piu 15
console.log(sum);


const users = [
  {
    name: "mario",
    surname: "rossi",
    age: 20
  },
  {
    name: "marco",
    surname: "bianchi",
    age: 40
  },
  {
    name: "gino",
    surname: "alfieri",
    age: 15
  }
]
// voglio ottenre l eta media delle persone

const somma = users.reduce((a, user) => a + user.age, 0);

const etamedia = somma/users.length

console.log(somma);
console.log(etamedia);