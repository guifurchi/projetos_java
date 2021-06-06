function redirect(){
    window.open("https://github.com/guifurchi/aula_javascript");
    //window.location.href = "https://github.com/guifurchi/aula_javascript"; //mesma janela
}


function clicou(){
    //alert("obrigado por ter clicado!");
    document.getElementById("agradecimento"). innerHTML="obrigado";
}

function trocar(elemento){
    elemento.innerHTML= "Obrigado por passar o mouse";
    //document.getElementById("onmousemove").innerHTML="Obrigado por passar o mouse"
}

function voltar(elemento){
    elemento.innerHTML= "Passar o mouse";
    //document.getElementById("onmousemove").innerHTML="Passar o mouse"
}

function change(elemento){
    console.log(elemento.value);
}

/*
function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true;    
    }else{
        validar = false;
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));
*/


/*date
var d = new Date();
dia = d.getDay();
alert(dia);
mes = d.getMonth()+1;
alert(mes);
ano = d.getFullYear();
alert(ano)
alert( dia + "/"+ mes + "/"+ano);
alert(d);
*/

/* REpetição com FOR
var count;
for(count = 0; count <= 5; count++){
    alert(count);
};
*/


/* Repetição
var count = 0
while (count <= 5){
    console.log(count);
    alert(count);
    count++;
}
*/

/* Condicional
var idade = prompt("Qual é a sua idade?");
if (idade >= 18) {
    alert("Maior de idade");
}else{
    alert("Menor de idade");
};
*/

//array
//var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}];
//console.log(fruta);
//console.log(fruta[1])


//var lista = ["maçã", "pêra", "laranja"];
//lista.push("uva"); //Inserir
//lista.pop() //Retirar
//console.log(lista)
//console.log(lista.length)
//console.log(lista.reverse())
//console.log(lista.toString())
//console.log(lista.join("-"))


//var nome = "Guilherme Furchi";
//var idade = 35;
//var idade2 = 10;
//var frase = "Guilherme é o pior"
//alert (nome + " tem " + idade + " anos ")
//frase2 = frase.replace("pior", "melhor");
//alert(frase2.toUpperCase());