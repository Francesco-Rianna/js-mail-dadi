// Mail
// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Per la soluzione di questo esercizio NON è consentito utilizzare .includes di js!
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano" 

// chiedere all'utente una mail 
const userEmail = prompt('Dimmi la tua email')

// creo lista email

const emailList = ['mike@gmail.it', 'pippo@gmail.it', 'filip@gmail.it', 'alino@gmail.it', 'maradona@gmail.it', 'lello@gmail.it', 'pippo@gmail.it']
// console.log(emailList)
let emailFound
for (let i = 0; i < emailList.length; i++) {

    const email = emailList[i];
    // console.log(email)

    // confronto email utente se è nella lista 
    if (userEmail === email) {
        emailFound = true
    }

    // console.log(emailFound)
}

if (emailFound === true) {
    alert('Email esatta')
} else {
    alert('Riprova email errata ')
}





