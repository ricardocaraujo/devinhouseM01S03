var numero1;
var numero2;
var operador;
var resultado;

function informaNumerosEOperacao() {
    numero1 = prompt('Informe o primeiro número')
    numero2 = prompt('Informe o segundo número')
    operador = prompt('Informe a operação (+, -, * ou /)')  

    numero1 = parseInt(numero1)
    numero2 = parseInt(numero2)

    if(operador === '+') {
        resultado = numero1 + numero2;
    } else if(operador === "-") {
        resultado = numero1 - numero2;
    } else if(operador === "*") {
        resultado = numero1 * numero2;
    } else if(operador === "/") {
        resultado = numero1 / numero2;
    } 
    
    console.log(resultado)   
}


