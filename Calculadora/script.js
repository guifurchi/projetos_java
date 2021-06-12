
/* 
http://www.devin.com.br/calculadoras-javascript/
*/


//inserir numeros um do lado do outro
function calcNum(num) {
    if (typeof gvisor == 'undefined') {
       document.calcform.visor.value = '';
    }
    document.calcform.visor.value = document.calcform.visor.value + num;
    gvisor = 1;
 }

 // apagar numeros
 function calcLimpar() {
    document.calcform.visor.value = '';
    delete gvalor;
    delete goper;
    document.calcform.visor.value = 0;
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
             }else{
                 if(oper == "percent"){
                     valor = parseFloat(valor1) / 100;
                 }else{
                     valor = parseFloat(valor1) *(-1);
                 }
             }
         }
     }
return(valor);
 }

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

   if (typeof goper != 'undefined') {
      gvalor = calcOper(goper, gvalor, valor);
      goper = oper;
      document.calcform.visor.value = gvalor;
   } else {
      gvalor = valor;
      goper = oper;
   }

}