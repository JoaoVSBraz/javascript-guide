const palpite = document.getElementById('palpite');
const enviar = document.getElementById('enviar');

const palpites = document.getElementById('palpites');
const ultimoResultado = document.getElementById('ultimoResultado')
const baixoOuAlto = document.getElementById('baixoOuAlto');

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let contagemPalpites = 1;
let resetarBotao;

enviar.addEventListener('click', (e) => {
    e.preventDefault();
    conferirPalpite();
});

function conferirPalpite() {
    let palpiteUsuario = Number(palpite.value);
    if(contagemPalpites === 1){
        palpites.textContent = "Palpites anteriores ";
    };
    palpites.textContent += palpiteUsuario + ' ';

    if(palpiteUsuario === numeroAleatorio){
        ultimoResultado.textContent = 'Parabéns! Você acertou!';
        ultimoResultado.style.backgroundColor = 'green';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else if(contagemPalpites === 10){
        ultimoResultado.textContent = 'Fim de jogo!';
        baixoOuAlto.textContent = '';
        configFimDeJogo();
    } else {
        ultimoResultado.textContent = 'Errado!';
        ultimoResultado.style.backgroundColor = 'red';
        if(palpiteUsuario < numeroAleatorio){
            baixoOuAlto.textContent = 'Palpite muito baixo!';
        } else {
            baixoOuAlto.textContent = 'Palpite muito alto!';
        }
    }

    contagemPalpites++;
    palpite.value = '';
    palpite.focus()
}

function configFimDeJogo() {
    palpite.disabled = true;
    enviar.disabled = true;
    resetarBotao = document.createElement('button');
    resetarBotao.textContent = 'Iniciar novo jogo';
    document.querySelector('#resultado').appendChild(resetarBotao);
    resetarBotao.addEventListener('click', reiniciarJogo);
}

function reiniciarJogo() {
    contagemPalpites = 1;

    const pegarParagrafos = document.querySelectorAll('.paras')
    for(let i = 0;i < pegarParagrafos.length; i++){
        pegarParagrafos[i].textContent = '';
    }

    document.querySelector('#resultado').removeChild(resetarBotao);

    palpite.disabled = false;
    enviar.disabled = false;
    palpite.value = '';
    palpite.focus();

    ultimoResultado.style.backgroundColor = 'white';
    numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}