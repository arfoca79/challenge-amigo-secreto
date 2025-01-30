// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
let numeroMaximo = 1;

function asignarTextoElemento(texto) {
    let elementoHTML = document.querySelector('#listaAmigos');
    elementoHTML.innerHTML += `<div role="listitem">${texto}</div>`;
}

function limpiarListaNombres() {
    let elementoHTML = document.querySelector('#listaAmigos');
    elementoHTML.innerHTML = "";
}

function agregarAmigo() {
    let amigo = document.getElementById('amigo').value;
    if (amigo == '') {
        alert('Por favor ingrese un nombre válido');
    } else {
        listaDeAmigos.push(amigo);
        asignarTextoElemento(amigo);
        limpiarCaja();
    }
}

function sortearAmigo() {
    numeroMaximo = listaDeAmigos.length;
    let numeroSorteado = Math.floor((Math.random()*numeroMaximo));
    limpiarListaNombres();
    let listaResultado = document.querySelector('#resultado');
    listaResultado.innerHTML = `El amigo sorteado es: ${listaDeAmigos[numeroSorteado]}`;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

