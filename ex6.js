var convidado1 = {
    nome: "Ricardo",
    sobrenome: "Araujo",
    setor: "camarote",
    idade: 39
}

var convidado2 = {
    nome: "João",
    sobrenome: "Martins",
    setor: "arquibancada",
    idade: 16
}

var convidado3 = {
    nome: "Bruna",
    sobrenome: "Leite",
    setor: "arquibancada",
    idade: 20
}

var listaDeConvidados = [convidado1, convidado2, convidado3]

function liberarBebidas(convidados) {
    var arrayResultante = [];    
    for(var i = 0; i < convidados.length; i++) {
        var objetoDoArray = convidados[i];
        if(convidados[i].idade > 17) {
            objetoDoArray.openbar = true;
        } else {
            objetoDoArray.openbar = false;
        }   
        arrayResultante.push(objetoDoArray)
    }
    return arrayResultante; 
}

var convidadosComBebidasProcessadas = liberarBebidas(listaDeConvidados) 

console.log(convidadosComBebidasProcessadas)