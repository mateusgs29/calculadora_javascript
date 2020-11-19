let visor = document.querySelector(".visor");
let expressao = '';
let digitouNumero = false;

function clicked(elemento){
    // se digitar um número, pode digitar a vontade
    if(typeof(elemento) === "number"){
        aplicando(elemento, true);
    // se não for um número, verifica se já foi digitado algum número
    }else if(digitouNumero){ 
        aplicando(elemento, false);
    }
    // se expressão estiver vazia e for clicado - ou (
    if(!expressao && (elemento === "-" || elemento === "(")){
        aplicando(elemento, false);
    }
}

function aplicando(elemento, status){
    expressao += elemento;
    visor.innerHTML = expressao;
    digitouNumero = status;
}

function reset(){
    // Botão de resetar o visor da calculadora
    expressao = '';
    visor.innerHTML = expressao;
    digitouNumero = false;
}

function result(){
    if(expressao){
        let resultado = eval(expressao).toFixed(5); // eval faz o calculo de uma expressão string 
        visor.innerHTML = Number(resultado); // transforma em Number para tirar os zeros a direita
        expressao = '';
        digitouNumero = false;
    }
}
