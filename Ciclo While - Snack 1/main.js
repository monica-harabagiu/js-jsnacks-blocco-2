/*
snack 1:
Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è minore di 50
*/

const arrayNumeri = []
let somma = 0

while (somma < 50) {

    let numeroUtente = parseInt(prompt("Inserisci un numero"))

    arrayNumeri.push(numeroUtente)
    somma += numeroUtente

    console.log("Il numero inserito è: " + numeroUtente)

}

console.log("La lista dei numeri inseriti è: " + arrayNumeri)
console.log("La somma dei numeri inseriti è: " + somma)