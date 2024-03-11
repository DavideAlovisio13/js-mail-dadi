/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.

Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.

Prima di partire a scrivere codice poniamoci qualche domanda:
Che ci sia un array da qualche parte?
Se dobbiamo confrontare qualcosa che "cosa" ci serve?

Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
3. si ma noi cosa vogliamo fare?
4. torniamo a scrivere in italiano
5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!:
P.S Dadi

*/

// 1 === MAIL

// dichiariamo una nuova variabile dove andremo a richiamare il bottone 

const submitBtn = document.querySelector('.submitbtn')

// inseriamo una funzione con un ascoltatore che al click del bottone faccia succedere qualcosa
submitBtn.addEventListener('click', function() {

    // creiamo un Array contenente le mail di chi può accedere 
    let serverUsers = [
        'AlanParrish@jumanji.com',
        'SarahWhittle@jumanji.com', 
        'SarahWhittle@jumanji.com',
        'JudyShepherd@jumanji.com',
        'Peter Shepherd@jumanji.com',
    ];

    // creiamo una variavile contenente il valore inserito dall'utente tramite imput
    let userValue = document.getElementById('emailinput').value;

    // creiamo una variabile booleana con valore 'false' , che ci servirà per controllora se l'accesso è consentito oppure no
    let accessAllowed = false;

    // controlliamo, a questo putno, che l'utente possa accedere

    for(let i = 0; i < serverUsers.length; i++) {
        if(userValue.toLowerCase()  === serverUsers[i].toLowerCase()) {
            accessAllowed = true;
        }
    }
    // inviamo adesso all'utente un messaggio per confermare o negare l'accesso

    let messUser = document.getElementById('messagexuser');
        if(accessAllowed) {
            messUser.innerHTML = 'Acesso consentito'
        } else {
            messUser.innerHTML = 'Accesso negato'
        }
})



// 2 === gioco dei dadi 

// inseriamo la funzione getRndIntegezer, per generare numeri randomici da un minimo a un massimo valore che per adesso non è ancora definito
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// fatto ciò, richiamiamo in una variabile il pulsante
let userPlayBtn = document.querySelector('.playgame');
// inseriamo una funzione con un ascoltatore che controlli il bottone e al click faccia capitare qualcosa
userPlayBtn.addEventListener('click', function() {
    // inseriamo le due variabili contenenti il numero assegnato al computer e all'utente
    let userNum = getRndInteger(1, 6);
    let computerNum = getRndInteger(1, 6);
    // inseriamo poi la variabile vuota nella quale verra inserito il vincitore 
    let = winnerG = '';
    /*
    aggiungiamo poi una condizione:
    - (if)se il numero dell'utente è maggiore del numero del computer, allore  riempiamo la variabile winnerG con un messaggio
    - (if else) se invece, il numero del computer è maggiore del numero dell'utente, allore  riempiamo la variabile winnerG con un'altro messaggio
    - (else) altrimenti inseriamo nella variabile winnerG il messaggio di pareggio.
    */ 
    if(userNum > computerNum) {
        winnerG = 'Congratulazioni! Per questa volta non verrai mangiato!! il tuo punteggio è: ' + userNum + ', mentre quello del computer è: ' + computerNum +'!';
    } else if(computerNum > userNum) {
        winnerG = 'Hai perso! Il computer ti ha battuto con un punteggio di: ' + computerNum + ' a ' + userNum + ' E adesso, Tieniti forte!!';
        fallUser = document.getElementsByClassName('titl-e');
            for (let i = 0; i < fallUser.length; i++) {
                fallUser[i].classList.add('tilt');
        }
    } else {
        winnerG = 'GULP! Pareggio...ritira!';
    } 
    //comunico all'utente il risultato  scrivendolo nell'html
    document.getElementById('result').innerHTML = winnerG;
    

})  
