// Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.


// inserimento array di nomi e cognomi
let nameUser = ['Gianluca', 'Napoleone', 'Adolf', 'Vladimir', 'Alessandro', 'Winston'];
let surnameUser = ['Farci', 'Bonaparte', 'Hitler', 'Putin', 'Magno', 'Churchill'];


// selezione casuale di 3 nomi e 3 cognomi

const falseGuest = [];
for (let i = 0; i < 3; i++) {
    const randomNameIndex = Math.floor(Math.random() * nameUser.length);
    const randName = nameUser[randomNameIndex];
    console.log(randName);

    const randomSurnameIndex = Math.floor(Math.random() * surnameUser.length);
    const randSurname = surnameUser[randomSurnameIndex];
    console.log(randomSurnameIndex);

    const randomGuest = `${randName} ${randSurname}`;
    falseGuest.push(randomGuest);
}

console.log(falseGuest);