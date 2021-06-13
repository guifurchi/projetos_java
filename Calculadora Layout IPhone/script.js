
/* http://www.devin.com.br/calculadoras-javascript/*/

//inserir numeros um do lado do outro
function calcNum(num) {
    if (typeof gvisor == 'undefined' || gvisor == 0 ) {
       document.calcform.visor.value = 0;
       document.calcform.limpar.value = "AC";
    }
    if(document.calcform.visor.value == 0){
        document.calcform.visor.value = "";
        document.calcform.visor.value = document.calcform.visor.value + num;
        document.calcform.limpar.value = "C";
        gvisor = 1;
    }else{
        document.calcform.visor.value = document.calcform.visor.value + num;
        gvisor = 1;


    }
 }

 // apagar numeros
 function calcLimpar() {
    document.calcform.visor.value = 0;
    delete gvalor;
    delete goper;
    document.calcform.limpar.value = "AC";
 }

 function calcOper(oper, valor1, valor2){
     if(oper == "somar"){
         valor = parseFloat(valor1) + parseFloat(valor2);
     }else{
         if(oper == "subtrair"){
             valor = parseFloat(valor1) - parseFloat(valor2);
         }else{
             if(oper =="multiplicar"){
                valor = parseFloat(valor1) * parseFloat(valor2);
             }else{
                 if(oper =="dividir"){
                valor = parseFloat(valor1) / parseFloat(valor2);
             }
         }
     }
 }
return(valor);
}
function calcParse(oper) {
   var valor = document.calcform.visor.value;
   delete gvisor;

   if (typeof goper != 'undefined' && oper == 'resultado') {
      gvalor = calcOper(goper, gvalor, valor);
      document.calcform.visor.value = gvalor;
      delete oper;
      delete gvalor;
      return(0);
   }

   if (typeof gvalor != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;
   } else {
      gvalor = valor;
      goper = oper;
   }
}

function calcParse1(oper){
    var result = document.calcform.visor.value;

   if (oper == 'minus') {
       valor = result * (-1);
       document.calcform.visor.value = valor;
   }
   if (oper == "percent"){
       valor = result / 100;
       document.calcform.visor.value = valor;
   }
}

