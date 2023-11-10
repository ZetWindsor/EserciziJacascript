//Implementare la funzione nicknameMap che, dato un array di persone, crea un array di nickname. 
//Il nickname deve essere formato in questa modo: <name>-<age>.

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];


//const nick = persons.map(person=>person.name+"-"+person.age)
//console.log(nick);

function stampNickNameAge(persons) {
  const nickname = persons.map(function (person) {
    return person.name + "-" + person.age;
  }
  );
  return nickname
}

nicknames = stampNickNameAge(persons)
console.log(persons);
console.log(nicknames)

////////////////////////////////////////////////////////////////////////////////////////////
function stampNickNameAge2(persons) {
  const nick = persons.map(person=>person.name+"---"+person.age)
return nick
}
console.log(stampNickNameAge2(persons));