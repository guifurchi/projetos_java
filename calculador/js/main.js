function calcularMedia(){

var nome = document.getElementById("nome").value;
var min = parseInt(document.getElementById("min").value);
var n1 = parseInt(document.getElementById("n1").value);
var n2 = parseInt(document.getElementById("n2").value);
var n3 = parseInt(document.getElementById("n3").value);
var n4 = parseInt(document.getElementById("n4").value);
var media = (n1 + n2 + n3 + n4)/4;
document.getElementById("media").value= media;

if(media >= min){
    frase = "Parabéns, você foi aprovado!!! Sua média final é "
}else{
    frase = "Infelizmente você foi reprovado!!! Sua média final é "
    frase2 = "A média para aprovação deve ser maior que "+ min;
}
document.getElementById("aluno").innerHTML= nome;
document.getElementById("mediahtml").innerHTML= frase + media;
document.getElementById("info").innerHTML= frase2 ;
}
