// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];

function agregarAmigo() {
   let amigo = document.getElementById('amigo').value;
   console.log(amigo); 
   listaDeAmigos.push(amigo);
   console.log(listaDeAmigos);
}


let numeroMaximo = listaDeAmigos.length;

function sortearAmigo() {
    let numeroSorteado = Math.floor(Math.random()*numeroMaximo)+1;

}
