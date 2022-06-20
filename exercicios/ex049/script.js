const inputChute = document.getElementById('inputChute');
const btnChute = document.getElementById('btnChute');
const chutesRestantes = document.getElementById('chutesRestantes');
const baixoOuAlto = document.getElementById('baixoOuAlto');

let contagemChutes = 1;
let resetarBotao;

btnChute.addEventListener('click', (e) => {
    e.preventDefault()
    verificarChute()
})

function verificarChute() {
    console.log('oi');
}