/*
snack 4
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo
*/

let userNumberHtml = document.getElementById("user-number")
let userNumber = parseInt(prompt("Inserisci un numero"))
console.log(userNumber)

if ((userNumber % 2) === 0) {
    userNumberHtml.innerHTML = userNumber
} else {
    userNumberHtml.innerHTML = userNumber + 1
}