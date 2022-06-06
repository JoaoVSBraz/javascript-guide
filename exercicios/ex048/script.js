const btnDadosPessoais = document.getElementById('dados-pessoais')
const btnInfoVeiculo = document.getElementById('info-veiculo')
const btnPontoAtendimento = document.getElementById('ponto-atendimento')
const dinamicForm = document.getElementById('form-body')
dinamicForm.innerHTML = dadosPessoais()

btnDadosPessoais.addEventListener('click', () => {
    dinamicForm.innerHTML = dadosPessoais()
} )

btnInfoVeiculo.addEventListener('click', () => {
    dinamicForm.innerHTML = infoVeiculo()
})

btnPontoAtendimento.addEventListener('click', () => {
    dinamicForm.innerHTML = pontoAtendimento()
})

let cpf = document.getElementById('cpf')
let nome = document.getElementById('nome')
let telefone = document.getElementById('telefone')
let celular = document.getElementById('celular')
let email = document.getElementById('email')


const formData = {
    cpf,
    nome,
    telefone,
    celular,
    email
}

function dadosPessoais() {
    return (
        `
        <div id="form-dados-pessoais">
        
            <label for="cpf">CPF</label>
            <input type="text" name="cpf" id="cpf" placeholder="Informe o número do CPF">

            <label for="nome">Nome</label>
            <input type="text" name="nome" id="nome" placeholder="Informe seu nome">

            <label for="telefone">Telefone residencial</label>
            <input type="text" name="telefone" id="telefone" placeholder="Informe seu telefone residencial">
                        
            <label for="telefone">telefone celular</label>
            <input type="text" name="celular" id="celular" placeholder="Informe seu telefone celular">

            <label for="telefone">E-mail</label>
            <input type="text" name="email" id="email" placeholder="Informe seu e-mail">
       
        </div>
        `
    )
}

function infoVeiculo() {
    return (
        `
        <div id="form-info-veiculo">
        
            <label for="placa-veiculo">Placa do veículo</label>
            <input type="text" name="placa-veiculo" id="placa-veiculo" placeholder="Informe a placa">

            <label for="renavam">Renavam do veículo</label>
            <input type="text" name="ranavam" id="renavam" placeholder="Informe o renavam">

            <label for="veiculo-uf">UF do veículo</label>
            <select name="uf-veiculo" id="uf-veiculo">
                <option value="PE">PE</option>
            </select>
        
        </div>
        `
    )
}

function pontoAtendimento() {
    return (
        `
        <div id="form-ponto-atendimento">
        
            <label for="tipo">Tipo</label>
            <select name="tipo" id="tipo">
                <option>Tipo 1</option>
            </select>

            <label for="ponto-atendimento-opt">Ponto de atendimento</label>
            <select name="ponto-atendimento-opt" id="ponto-atendimento-opt">
                <option>Ponto 1</option>
            </select>

            <label for="dia-agendamento">Dia do agendamento</label>
            <input type="date" name="dia-agendamento" id="dia-agendamento">

            <label for="horario-agendamento">Horário do agendamento</label>
            <select name="horario-agendamento" id="horario-agendamento">
                <option>Horário 1</option>
            </select>

            <button type="submit">Enviar</button>
        
        </div>
        `
    )
}

for (let i = 0; i < dinamicForm.children.length; i++ ) {
    console.log(dinamicForm.children[i].children[i]);
}