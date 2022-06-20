const palpite = document.getElementById('palpite');
const enviar = document.getElementById('enviar');

const palpites = document.getElementById('palpites');
const ultimosResultados = document.getElementById('ultimosResultados')
const baixoOuAlto = document.getElementById('baixoOuAlto');

let contagemPalpites = 1;
let resetarBotao;

enviar.addEventListener('click', (e) => {
    e.preventDefault()
    verificarChute()
})

function verificarChute() {
    
}