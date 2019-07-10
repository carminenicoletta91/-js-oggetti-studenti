/*Creare un oggetto che descriva uno studente con le seguenti proprietà:
nome, cognome e età. Stampare a schermo attraverso
il for in tutte le proprietà*/
var studente = {
  nome :"mario",
  cognome : "rossi",
  eta : 20
};
for (var x in studente) {
 console.log(x + ":" + studente[x]);
}
/*Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno nome e cognome*/
var studenti =[
  {
    nome:"mario",
    cognome:"rossi",
    eta:20
  },
  {
    nome:"filippo",
    cognome:"inzaghi",
    eta:40
  },
  {
    nome:"cesare",
    cognome:"cremonini",
    eta:35
  }

];
for(var i =0;i<studenti.length;i++){
  console.log(studenti[i].nome +"--" + studenti[i].cognome);
}
