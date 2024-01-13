/*
snack 2
genera un numero casuale tra 1 e 100 e poi chiedi all'utente di indovinare il numero. Il programma poi deve far comparire un messaggio "il numero è troppo alto" oppure "il numero è troppo basso" nel momento in cui il numero detto dall'utente non è perfettamente uguale al numero estratto in modo casuale
*/

const randomNumber = Math.floor(Math.random() * 100) + 1
console.log(randomNumber)


let userNumber = 0

while (userNumber !== randomNumber) {

    userNumber = parseInt(prompt("Inserisci un numero tra 1 e 100 e prova ad indovinare"))
    console.log(userNumber)

    if (userNumber > randomNumber) {
        console.log("Il numero è troppo alto")
        alert("Il numero è troppo alto")
    } else if (userNumber < randomNumber) {
        console.log("Il numero è troppo basso")
        alert("Il numero è troppo basso")
    } else {
        console.log("Bravo, hai indovinato il numero esatto")
    }

    userNumber === randomNumber

}


