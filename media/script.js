
var nome = prompt("Qual é o seu nome ?");

var n1 = parseInt (prompt ("Insira a 1º nota : "));
var n2 = parseInt (prompt ("Insira a 2º nota : "));
var n3 = parseInt (prompt ("Insira a 3º nota : "));

var media = (n1 + n2 + n3) / 3;
var media = media.toFixed(2); //fixa 2 casas após a virgula 

var publicarNome = document.getElementsByClassName ("nome")[0];
var publicarNota = document.getElementById ("media-final"); 

//var publicar = document.getElementById ("media-final");// //encontra o elemento pelo ID 


publicarNome.innerHTML = nome;
publicarNota.innerHTML = media;

//publicar.innerHTML = "<p class= 'xuxu'>" + media + "</p>"; 



console.log (publicar)

