// Crea una lista di email di invitati ad una festa. 
// Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere, 
// stampa un messaggio appropriato sull’esito del controllo, utilizzando un ciclo for.
//  Non è consentito usare nessun metodo proprio degli array (come includes, per esempio). Si può fare? Certo che si basta ragionare un po’. 
//  Nota: Non è necessario provvedere alla validazione delle email

const invitedEmail =[
    'utente1@gmail.com',
    'utente2@gmail.com',
    'utente3@gmail.com',
    'utente4@gmail.com',
    'utente5@gmail.com',
    'utente6@gmail.com',
    'utente7@gmail.com',
    'utente8@gmail.com',
    'utente9@gmail.com'
];
const userEmail = prompt('inserisci la tua email:');
let emailFound = false;
for(let i = 0; i < invitedEmail.length; i++){
    if(userEmail === invitedEmail[i]){
        emailFound = true;
    }
}
if(emailFound){
    console.log('email trovata, puoi entrare');
}else{
    console.log('email non trovata, non puoi accedere');
}
