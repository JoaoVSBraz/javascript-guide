const dinamicForm = document.getElementById('form-body')
const resultado = document.getElementById('resultado')

const btnDadosPessoais = document.getElementById('dados-pessoais')
const btnInfoVeiculo = document.getElementById('info-veiculo')
const btnPontoAtendimento = document.getElementById('ponto-atendimento')

const formDadosPessoais = document.getElementById('form-dados-pessoais')
const formInfoVeiculo = document.getElementById('form-info-veiculo')
const formPontoAtendimento = document.getElementById('form-ponto-atendimento')

formDadosPessoais.style.display = 'flex'
formInfoVeiculo.style.display = 'none'
formPontoAtendimento.style.display = 'none'

btnDadosPessoais.addEventListener('click', () => {
    formDadosPessoais.style.display = 'flex'
    formInfoVeiculo.style.display = 'none'
    formPontoAtendimento.style.display = 'none'
} )

btnInfoVeiculo.addEventListener('click', () => {
    formDadosPessoais.style.display = 'none'
    formInfoVeiculo.style.display = 'flex'
    formPontoAtendimento.style.display = 'none'
})

btnPontoAtendimento.addEventListener('click', () => {
    formDadosPessoais.style.display = 'none'
    formInfoVeiculo.style.display = 'none'
    formPontoAtendimento.style.display = 'flex'
})



function sendData(event) {
    event.preventDefault()

    let cpf = document.getElementById('cpf').value
    let nome = document.getElementById('nome').value
    let telefone = document.getElementById('telefone').value
    let celular = document.getElementById('celular').value
    let email = document.getElementById('email').value

    let placa = document.getElementById('placa-veiculo').value
    let renavam = document.getElementById('renavam').value
    let ufVeiculo = document.getElementById('uf-veiculo').value

    let tipoAgendamento = document.getElementById('tipo-agendamento').value
    let pontoAtendimento = document.getElementById('ponto-atendimento-opt').value
    let diaAgendamento = document.getElementById('dia-agendamento').value
    let horarioAgendamento = document.getElementById('horario-agendamento').value

    let formData = {
        "cpf": cpf,
        "nome": nome,
        "telefone": telefone,
        "celular": celular,
        "email": email,

        "placa": placa,
        "renavam": renavam,
        "ufVeiculo": ufVeiculo,

        "tipoAgendamento": tipoAgendamento,
        "pontoAtendimento": pontoAtendimento,
        "diaAgendamento": diaAgendamento,
        "horarioAgendamento": horarioAgendamento
    }
    
    resultado.innerHTML = result(formData)

}

function result(formData) {
    return `
        <h2>Dados pessoais</h2>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">CPF</th>
                    <th scope="col">NOME</th>
                    <th scope="col">TELEFONE</th>
                    <th scope="col">CELULAR</th>
                    <th scope="col">E-MAIL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>${formData.cpf}</td>
                    <td>${formData.nome}</td>
                    <td>${formData.telefone}</td>
                    <td>${formData.celular}</td>
                    <td>${formData.email}</td>
                </tr>
            </tbody>
        </table>
    `
}