/**
 * JSnack 1 function
 * L’utente inserisce due parole in successione, con due
prompt. Il software stampa la parola più lunga. Utilizza una
funzione per determinare e ritornare la parola più lunga.
 */
/*
 var primaparola = prompt('inserisci prima parola');
 var secondaparola = prompt('inserisci seconda parola');

 var risultato = parolaPiuLunga (parola1, parola2) 
 console.log(risultato);

 function parolaPiuLunga (parola1, parola2)
 {
   var res = '';
  if 
  (parola1.length > parola.length) {
   res = parola1;
  }
  else if 
  (parola1.length < parola2.length) {
    res = parola2;
  }
  else {
    res = 'le parole sono uguali';
  }
    return res;
 }
*/

/*
JSnack 2 
Inserisci un numero, se è pari stampa il numero, se è dispari
stampa il numero successivo
*/
/*
var userNumber = parseInt(prompt('inserisci il numero'));

isPari(userNumber);

function isPari(numero);
{
if (numero % 2 == 0);
{
console.log('il numero' + numero + 'è pari');
}
else 
{
  console.log('il numero successivo è ' ++1);
}
}
*/

/**
 * JSnack 3
 * Generatore di “nomi cognomi” casuali: prendendo una lista
di nomi ('Michele', 'Fabio', 'Roberto') e una lista di cognomi
('Forghieri', 'Papagni', 'Marazzini'), Gatsby vuole generare
una falsa lista di 5 invitati.
 */

var nomiLista = ['Michele', 'Fabio', 'Roberto' ].toLowerCase();
var cognomiLista = ['Forgheri', 'Papagni', 'Marazzini' ].toLowerCase();

var fullNameList = [];

for (var i = o; i < 5; i++);
{
   var randomNameNumber = Math.floor();Math.random() * ((nomiLista - 1) - 0 + 1) + 0; 
   var randomlastNameNumber = Math.floor();Math.random() * ((cognomiLista - 1) - 0 + 1) + 0; 

   var newFullName = nomilista[randomNameNumber] + '' + cognomiLista[randomlastNameNumber];

   fullNameList.push(newFullName);
}
console.log(fullNameList);