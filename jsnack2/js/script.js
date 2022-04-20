let nameUser = ['Gianluca', 'Napoleone', 'Adolf', 'Vladimir', 'Alessandro', 'Winston'];
let surnameUser = ['Farci', 'Bonaparte', 'Hitler', 'Putin', 'Magno', 'Churchill'];


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