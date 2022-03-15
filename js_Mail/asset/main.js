


// MAIL

// 1)Chiedi all’utente la sua email

// 2)controlla che sia nella lista di chi può accedere

// 3)stampa un messaggio appropriato sull’esito del controllo
// (non usare INCLUDES)





let iscritti = [ "cavaniMATADOR@gmail.com", "hamsikMAREKIARO@tiscali.it", "maradonaD10S@hotmail.it", ];

let inserisciMail = prompt("inserisci la tua mail");
console.log("la mail inserita è " + inserisciMail);



for (var i = 0; i < iscritti.length; i++ ) {

    if ( inserisciMail === iscritti[i] ) {
        console.log("sei già registrato!");
        document.getElementById("risposta_in_uscita").innerHTML = `sei già registrato!`;
    } else {
        console.log("effettua la registrazione");
        document.getElementById("risposta_in_uscita").innerHTML = `NON SEI REGISTRATO!!! effettua la registrazione!`;
    }
}