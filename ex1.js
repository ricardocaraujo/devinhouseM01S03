var listaNumeros = [ 2, 3, 9, 12, 16, 55, 90, 78, 17 ]

listaNumeros.forEach(function(element, index) {
    listaNumeros[index] = element*2;    
});

console.log(listaNumeros)