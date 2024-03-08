// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.


// genero numero per utente
const userNumber = parseInt(Math.floor(Math.random() * 6) + 1);
const compNumber = parseInt(Math.floor(Math.random() * 6) + 1);
console.log(userNumber + ' il tuo numero')
console.log(compNumber + ' numero pc ')

let winner = 'pareggio'
if (userNumber > compNumber) {
    winner = 'Hai vinto'
} else if (userNumber < compNumber) {
    winner = 'Hai perso'

}

console.log(winner)

// output utente
alert(winner + (' (Punteggio utente: ' + userNumber + '/') + (' Punteggio computer: ' + compNumber + ')'));



