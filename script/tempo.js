var ms = 0;
var hh = 0;
var mm = 0;
var ss = 0;


var cron;

// INICIAR O CRONÔMETRO
function start(){ 

    timer();
    cron = setInterval(timer, 10);
    document.querySelector('.botao1').style.visibility = 'hidden';
    console.log('O cronômetro iniciou !');

} 

// PAUSAR O CRONÔMETRO
function pause(){

    clearInterval(cron);
    document.querySelector('.botao1').style.visibility = 'visible';
    console.log('O cronômetro está pausado !');
}

// REINICIAR O CRONÔMETRO
function zeroTime(){

    clearInterval(cron); 
    
    ms = 0;
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerHTML = '00:00:00:00';
    document.querySelector('.botao1').style.visibility = 'visible';
    document.querySelector('.botao2').style.visibility = 'visible';

    console.log('O cronômetro está zerado !');
}

// CONTADOR 
function timer(){

    ms++;

    if(ms == 60){
        ms = 0;
        ss++
    }
        if(ss == 60){   
            ss = 0;
            mm++;
        }
            if(mm == 60){
                mm = 0;
                hh++
            }

            // FORMATAR OS NUMEROS CASO SEJA MENOR DO QUE 10
            var format = (hh < 10 ? '0' + hh : hh) + ":" + (mm < 10 ? '0' + mm : mm) + ":" + (ss < 10 ? '0' + ss : ss) + ":" + (ms < 10 ? '0' + ms : ms);
            document.getElementById('counter').innerHTML = format;
} 