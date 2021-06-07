window.onload = function(){

    var sec = 0;
    var mili = 0;
    var min = 0;
    var appendsec = document.getElementById("sec");
    var appendmili = document.getElementById("mili");
    var appendmin = document.getElementById("min");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var interval;

//determinar o intervalo do relogio
    buttonStart.onclick = function() {
        clearInterval(interval)
        interval = setInterval(startTimer,10); //setInterval(function, milliseconds)
    }
// iniciar contagem função StartTime
    function startTimer (){
        mili++; //contador milisimal
        if(mili <=9){ //contagem dos milisegundos até 09
            appendmili.innerHTML = "0" + mili;
        }
        if(mili > 9){// contagem dos milisegundos maior que 9 
            appendmili.innerHTML = mili;
        }
        if(mili >99){ //cointagem dos milisegundos até 99
            sec++;// contador segundos
            appendsec.innerHTML = "0" + sec; // o que será feito quando os milisegundos for > 99 milisegundos
            mili = 0;// zerar os milisegundos
            appendmili.innerHTML = "0" + 0; // zerar contador na página
        }
        if(sec > 9){
            appendsec.innerHTML = sec;
        }
        if(sec >59){//contagem dos minutos
            min++;
            appendmin.innerHTML = "0" + min;
            sec = 0;
            appendsec.innerHTML = "0" + 0;
        }
    }
    buttonStop.onclick = function (){// parar no intervalo quando clicado
        clearInterval(interval);
    }
    buttonReset.onclick = function(){// resetar o contador
        clearInterval(interval);
        sec = 0; //zerar contador no backend sec
        mili = 0; //zerar contador no backend mili
        appendmili.innerHTML = "00"; //zerar contator no html mili
        appendsec.innerHTML = "00"; // zerar contatod no html sec
    }

}