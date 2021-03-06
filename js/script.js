/*

Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va stampato in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

*/

// 1 - prendiamo Il numero dei chilometri che l'utente digita
// 2 - prendiamo l'età dell'utente
// 3 - stabiliamo il prezzo del biglietto per un km
// 4 - calcoliamo il prezzo del biglietto standad per un km
// 5 - Applichiamo uno sconto del 20% ai minori di 18 anni
// 6 - calcoliamo il prezzo del biglietto standard meno il 20%
// 7 - Applichiamo uno sconto del 40% ai maggiori di 65 anni
// 8 - calcoliamo il prezzo del biglietto standad meno il 40%
// 9 - stampiamo risultato prezzo biglietto



/* number of kilometers */
var kilometers = prompt('Quanti chilometri vuoi prercorrere?')
console.log(kilometers)

/* years */
var years = prompt('Quanti anni hai?')
console.log(years)

/* ticket price for one km */
var tiket1Km = 0.21;
console.log(tiket1Km);

/* ticket standard */
var prezzo = kilometers * tiket1Km;
console.log(prezzo);

var under18 = prezzo * 20 / 100;
console.log(under18)
var over65 = prezzo * 40 / 100;
console.log(over65)

/*20% discount for children under 18 */
if (years < 18) {
     prezzo = prezzo - under18;
}

/*40% discount for children over 65 */
else if (years > 65) {
    prezzo = prezzo - over65;
}

console.log(prezzo);

var title = document.getElementById('title');
var tot = document.getElementById('tot');

title.innerHTML = ('Per compiere ') + kilometers + ' ' + 'Km';
tot.innerHTML = ('Il prezzo del tuo ticket è pari a:') + ' ' + prezzo .toFixed(2)  + ' ' + '€';
