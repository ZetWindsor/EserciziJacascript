// Utilizza il metodo forEach che prende un array di nomi di frutta e li stampa aggiungendo un punto esclamativo a ciascun nome di frutta.
const fruits = ["Mela", "Banana", "Kiwi", "Fragola"];

fruits.forEach(element => {
  console.log(element + "!");
});


////////////////////////////////////////////////////

function forEachFruit(array) {
  array.forEach(function (element) {
    console.log(element + "//");
  }) ;
}
forEachFruit(fruits);
// fatto a funzione cosi non l ho ben capito perhce se metto il return a riga 14 poi mi da undefined

//////////

function ciao(array) {
  const puntoesclamativo = []
  array.forEach(element => { puntoesclamativo.push(element+"---")})
  return puntoesclamativo
}
console.log(ciao(fruits));

////////////////

function domi(array){
return array.forEach(element =>{element})
}
console.log(domi(fruits));
// scritto cosi viene undefined


function develhope(fruits){
  console.log(fruits + "+");
}

fruits.forEach(develhope)