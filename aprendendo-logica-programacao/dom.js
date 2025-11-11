const botao = document.querySelector('#botao');

const titulo = document.querySelector('#titulo');

function trocaTexto() {
    titulo.innerText = "faleceu logo hoje 5 anos";
}
botao.addEventListener('click', trocaTexto)