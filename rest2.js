`Scrivi una funzione filterOutOdds che accetta un numero qualsiasi di argomenti e restituisce un array contenente solo i numeri pari.`

function filterOutOdds(...numbers) {
  return numbers.filter(rest => rest % 2 === 0)
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,]

console.log(filterOutOdds(...numbers));