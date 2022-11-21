/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il piÃ¹ grande tra due numeri interi.
*/

function compareNambers (a,b){
    if(a>b) {
      console.log(`${a} è maggiore di ${b}`)
    } else if(a<b){
       console.log(`${b} è maggiore di ${a}`)
    }else if(a===b){
      console.log(`i due numeri sono uguali` + a);
    }
}
compareNambers(5,9)

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito Ã¨ diverso da 5.
*/

function isNamber5(num){
    if(num !==5){
    console.log('not equal');
}
}

isNamber5(35)

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisible by 5" in console se un numero fornito Ã¨ perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isDivisibleBy5(num) {
    if(num % 5 === 0 ){
        console.log('divisible by 5')
    }
}

isDivisibleBy5(32)
isDivisibleBy5(55)

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

function eightCheck(a,b){
    if(a === 8 || b === 8 ||a + b === 8 || a - b === 8 || b - a === 8){
        console.log('ok');
    } else {
        console.log('no')
    }
}

eightCheck(4,4)

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'Ã¨ una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*function getTotalCost(totalShoppingCart){

    return totalShoppingCart> 50 ? totalShoppingCart : totalShoppingCart + 10;
}

console.log(
    getTotalCost(13),
    getTotalCost(51),
    getTotalCost(50),
)
/*

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi Ã¨ il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

function getTotalCost(totalShoppingCart){
    if(typeof totalShoppingCart !== 'number'){
       return null;
    }

    const discountedPrice = totalShoppingCart - ((totalShoppingCart / 100) * 20);
    return discountedPrice > 50 ? discountedPrice : discountedPrice + 10;
}


console.log(
    getTotalCost(13),
    getTotalCost(51),
    getTotalCost(50),
)


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal piÃ¹ alto al piÃ¹ basso.
  Alla fine mostra il risultato in console.
*/

function sortSequence(a,b,c){
    let one, two, three;
    
    one = a > b && a > c ? a : b > a && b > c ? b : c;
    two = a > b && a < c ? a : b > a && b < c ? b : c;
    three = a < b && a < c ? a : b < a && b < c ? b : c;

    console.log(one, two, three);
}

sortSequence(100,40,80)


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un numero fornito sia un intero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

function isNumeroIntero(num){
    return typeof num === 'number' && num % 1 === 0;
}
console.log(
    isNumeroIntero(99),
    isNumeroIntero(99.45),
)

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

function isNumeroPariDispari(num){
   if(num % 2 === 0){
    console.log('è pari');
   } else {
    console.log('è disoari')
   }
}

isNumeroPariDispari(2)
isNumeroPariDispari(22)
isNumeroPariDispari(11)

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  */
  let val = 7
  if (val < 5) {
    console.log("Meno di 5");
    } else if(val < 10) {
        console.log("Meno di 10") ;
    } else {
      console.log("Uguale a 10 o maggiore");
    }



/*
ESERCIZIO 11
  Crea un blocco condizionale if/else annidato su piÃ¹ livelli per mostrare in console il messaggio corretto in ogni condizione.

  num < 5 - mostra in console "Tiny"
  num < 10 - mostra in console "Small"
  num < 15 - mostra in console "Medium"
  num < 20 - mostra in console "Large"
  num >= 20 - mostra in console "Huge"
*/

let num = 16

if (num < 5) {
    console.log("Tiny");
    } else if(val < 10) {
        console.log("Small") ;
    }  else if(val < 15) {
        console.log("Medium") ;
    } else if(val < 20) {
        console.log("Large") ;
    } else {
      console.log("Huge");
    }

/*  ESERCIZIO 12
  Usa un operatore ternaio per assegnare ad una variabile chiamata "gender" i valori "male" o "female".
  La scelta deve essere basata sul valore di un'altra variabile chiamata isMale.
*/


let isMale = 'male';
let gender = isMale == true ? 'male' : 'famale' ;

console.log(gender)


/* ESERCIZIO 13
  Mostra i numeri da 0 a 5 (incluso) in ordine ascendente utilizzando un ciclo while.
*/


let a = 0;
while(a <= 5){
  console.log(a);
  a++;
}

/* ESERCIZIO 14
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente utilizzando un ciclo for.
*/

for(let i = 0; i <= 10; i++){
  console.log(i);
}

/* ESERCIZIO 15
  Mostra i numeri da 0 a 10 (incluso) in ordine ascendente, ma evitando di mostrare i numeri 3 e 8.
*/


let n = 0;
      while(n < 10){
        n++;
        if(n == 3 || n == 8){
          n-1;
          continue;
        }
        console.log(n);
      }


/* ESERCIZIO 16
  Scrivi un ciclo in JavaScript per iterare da 0 a 15. Per ciascun elemento, il ciclo deve controllare the il valore corrente sia pari o dispari, e mostrare il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 17
  Scrivi un algoritmo che iteri i numeri da 1 a 100, stampandoli in console. Se un valore tuttavia Ã¨ multiplo di 3, stampa al suo posto la parola "Fizz" e se il numero Ã¨ multiplo di 5, stampa "Buzz". Se le condizioni si verificano entrambe, stampa "FizzBuzz".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 18
  Scrivi un algoritmo per controllare il giorno della settimana. Usa uno switch-case sulla variabile "day", che puÃ² avere un valore da 1 a 7.
  Ad esempio, se il valore di "day" Ã¨ 1, stampa in console "LunedÃ¬"; se il valore fosse 3, in console dovrebbe comparire "MercoledÃ¬".
*/

/* SCRIVI QUI LA TUA RISPOSTA */