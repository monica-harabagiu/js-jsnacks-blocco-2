/*
snack 3
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro
*/

const arrayAnimals = [
    "Lion",
    "Elephant",
    "Giraffe",
    "Monkey",
    "Tiger",
    "Kangaroo",
    "Zebra",
    "Penguin",
    "Dolphin",
    "Koala"
]
console.log(arrayAnimals)

const arrayNumbers = [11, 22, 33, 44, 55]
console.log(arrayNumbers)


for (arrayNumbers.length = 5; arrayNumbers.length < arrayAnimals.length; arrayNumbers.length === arrayAnimals.length) {

    arrayNumbers.push(Math.floor(Math.random() * 100) + 1)

}

console.log(arrayNumbers)
