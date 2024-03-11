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

// dichiariamo una nuova variabile dove andremo a rchiamare il bottone 

const submitBtn = document.querySelector('.submitbtn')

// inziamo una funzione dove inseriamo un ascoltatore che al click del bottone confronti e controlli i dati inseriti
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

    // creiamo una variabile booleana per controllare se l'utente può accedere oppure no
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