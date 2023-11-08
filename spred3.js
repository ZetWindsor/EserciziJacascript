`Dato un array originalArray, crea un nuovo array chiamato cloneArray che sia una copia 
superficiale di originalArray utilizzando l'operatore spread.`

const originalArray = [1, 2, 3, 4, 5];

const cloneArray = [...originalArray]

originalArray.push(6, 7, 8)

console.log(originalArray);
console.log(cloneArray);