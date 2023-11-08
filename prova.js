
const numeri = [1, 2, 3, 4, 5];

// Arrow function per il raddoppio di ogni numero
const ciao = numeri.filter(numero => numero % 2 === 0)

console.log(ciao);


const hello = numeri.map(numero => numero % 2 === 0)

console.log(hello);

//////////

function cacca(numeri) {
  const arraypari=[]
numeri.forEach(numero=>{
  if(numero %2 ===0){
    arraypari.push(numero)
  }})

  return arraypari;
}
console.log(cacca(numeri));