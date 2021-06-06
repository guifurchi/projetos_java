/*
var lista = ["11 7","-11 6","11 -2","10 7"];


let line = lista[0].split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
*/


/*
var lista = ["11 7","-11 6","11 -2","10 7"];

let line = lista[0].split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
*/

function feira(){
var lista = ["11 7","-11 6","11 -2","10 7"];
var limite = lista.length;//define quantidade de registros
var colunm_ini = 0 //coluna de inicio
var count;

for(count=1; count<=limite; count++){
    var separa = lista[colunm_ini].split(" ")//separa os registros de colunas
    let A = parseInt(separa[0]);
    let B = parseInt(separa[1]);
    let total = A + B; // Altere o valor da variável com o cálculo esperado
    colunm_ini++
    console.log("X = " + total);
    document.getElementById("feira") .innerHTML= total;
};
}

/* original
let line = gets().split(" ");
let A = parseInt(line[0]);
let B = parseInt(line[1]);
let total = A + B; // Altere o valor da variável com o cálculo esperado
console.log("X = " + total);
*/