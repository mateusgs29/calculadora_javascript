let visor = document.querySelector(".visor");
let expressao = '';
let digitouNumero = false;

function clicked(n){
    // se digitar um número, pode digitar a vontade
    if(typeof(n) === "number"){
        expressao += n;
        visor.innerHTML = expressao;
        digitouNumero = true;
    // se não for um número, verifica se já foi digitado algum número
    }else if(digitouNumero){ 
        expressao += n;
        visor.innerHTML = expressao;
        digitouNumero = false;
    }
}

function reset(){
    // Botão de resetar o visor da calculadora
    expressao = '';
    visor.innerHTML = expressao;
    digitouNumero = false;
}

function result(){
    if(expressao){
        let resultado = eval(expressao).toFixed(4); // eval faz o calculo de uma expressão string 
        visor.innerHTML = Number(resultado); // transforma em Number para tirar os zeros a direita
        expressao = '';
        digitouNumero = false;
    }
}
