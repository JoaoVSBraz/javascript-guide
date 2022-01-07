// definindo um objeto
let lamborghiniGallardo = {
    marca: 'Lamborghini',
    modelo: 'Gallardo',
    cor: 'Laranja',
}

// definindo uma função construtora
function CarroEsportivo(marca, modelo, cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.acelerar = function () {
        console.log('Acelerando')
    }
    this.freiar = function () {
        console.log('Freiar')
    }
}

// criando um novo objeto a partir da função construtora
let LamborghiniAventador = new CarroEsportivo('Lamborghini', 'Aventador', 'Preto')

// Utilizando um método do objeto(classe) CarroEsportivo
LamborghiniAventador.acelerar()