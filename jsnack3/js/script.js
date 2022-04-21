// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

const userNumber = parseInt(prompt("Inserisci il numero da elevare al cubo"));

let counter = 1;
while (counter <= userNumber) {
    const numCube = counter * counter * counter;
    console.log(numCube);
    counter++;
}