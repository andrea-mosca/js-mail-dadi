// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer. 
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
//  Che ci sia un array da qualche parte? Se dobbiamo confrontare qualcosa che "cosa" ci serve?

const playerNumber = Math.floor((Math.random() * 6) + 1);
const computerNumber = Math.floor((Math.random() * 6) + 1);

console.log('player number: '+ playerNumber);
console.log('computer number: '+ computerNumber);

if(playerNumber > computerNumber){
    console.log('il giocatore ha vinto');
}else if (playerNumber < computerNumber){
    console.log('il computer ha vinto');
}else{
    console.log('pareggio');
}