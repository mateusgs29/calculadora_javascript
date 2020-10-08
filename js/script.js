let visor = document.querySelector(".visor");
let expressao = '';

function clicked(n){
    expressao += n;
    visor.innerHTML = expressao;
}

function reset(){
    expressao = '';
    visor.innerHTML = expressao;
}

function result(){
    visor.innerHTML = eval(expressao);
    expressao = '';
}
