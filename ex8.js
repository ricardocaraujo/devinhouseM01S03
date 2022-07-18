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
    setor: "pista",
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

function separarCamarote(listaDeConvidados){
    var listaCamarote = listaDeConvidados.filter(elemento => elemento.setor === "camarote")
    return listaCamarote;
}

function separarArquibancada(listaDeConvidados){
    var listaArquibancada = listaDeConvidados.filter(elemento => elemento.setor === "arquibancada")
    return listaArquibancada;
}

function separarPista(listaDeConvidados){
    var listaPista = listaDeConvidados.filter(elemento => elemento.setor === "pista")
    return listaPista;
}

var listaCamarote = separarCamarote(convidadosComBebidasProcessadas);
var listaArquibancada = separarArquibancada(convidadosComBebidasProcessadas);
var listaPista = separarPista(convidadosComBebidasProcessadas);

var camarote = document.getElementById("listaCamarote")
var arquibancada = document.getElementById("listaArquibancada")
var pista = document.getElementById("listaPista")

const montaNome = (objPessoa) => {
    return `${objPessoa.nome} ${objPessoa.sobrenome}`
}

listaCamarote.forEach(convidado => {
    camarote.innerHTML += `<li>${montaNome(convidado)}</li>`;
});

listaArquibancada.forEach(convidado => {
    arquibancada.innerHTML += `<li>${montaNome(convidado)}</li>`;
})

listaPista.forEach(convidado => {
    pista.innerHTML += `<li>${montaNome(convidado)}</li>`;
})