// 1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

let sum = 0

for (let i = 0; i < 5; i++) {
    const givemeNumber = parseInt(prompt("Digita un numero"));
    sum += givemeNumber;
}
console.log(sum);