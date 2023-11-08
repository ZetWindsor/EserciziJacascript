//In questo esercizio dato un array di studenti:
//Utilizza forEach per stampare i nomi degli studenti.
//Utilizza find per trovare uno studente con un voto superiore a 90.
//Utilizza reduce per calcolare la media dei voti degli studenti.
//Utilizza map per creare un nuovo array contenente i nomi degli studenti in maiuscolo.
//Utilizza filter per trovare gli studenti con voti superiori a 85.
const studenti = [
  { nome: "Alice", voto: 95 },
  { nome: "Bob", voto: 88 },
  { nome: "Carol", voto: 76 },
  { nome: "David", voto: 92 },
  { nome: "Eve", voto: 84 },
];
/////
function primo(array) {
  const nomiStudenti = []
  array.forEach(function (elemento) {
    nomiStudenti.push(elemento.nome)
  })
  return nomiStudenti
}
console.log(primo(studenti));
//////

function secodno(array) {
return array.find((elemento)=>elemento.voto > 90)
}
console.log(secodno(studenti));
///

function terzo(array) {
  const sum = array.reduce((a,valore)=> a + valore.voto,0);
  const votoMedio = sum / array.length;
  return votoMedio
}
console.log(terzo(studenti));

/////
function quarto(array) {
return array.map( function(elemento) {
    return elemento.nome.toUpperCase()
  })
}
console.log(quarto(studenti));

////
function quinto(array){
  const votiAlti = array.filter(elemento => elemento.voto > 85)
  return votiAlti
}

console.log(quinto(studenti));