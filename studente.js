/*Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso
il for in tutte le proprietà*/
var studente = {
  nome :"mario",
  cognome : "rossi",
  eta : 20
}
for (var x in studente) {
 console.log(x + ":" + studente[x]);
}
