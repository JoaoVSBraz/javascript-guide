# Anotações

Javascript é uma linguagem de programação interpretada, multiparadigma e com tipagem dinâmica. Foi criada em 1995 por Brendan Eich.

## Operadores

- Aritméticos
- Atribuição
- Relacionais
- Lógicos
- Ternário

### Operadores Aritméticos

- ```+``` <span style="margin-left: 20px;">Adição e Concatenação</span>
- ```-``` <span style="margin-left: 20px;">Subtração</span>
- ```*``` <span style="margin-left: 20px;">Multiplicação</span>
- ```/``` <span style="margin-left: 20px;">Divisão</span>
- ```%``` <span style="margin-left: 20px;">Resto da Divisão</span>
- ```**``` <span style="margin-left: 12px;">Exponenciação</span>

#### Precedência de Operadores Aritméticos

1. ```()```
2. ```**```
3. ```*```<span style="margin: 0 10px;">|</span>```/```<span style="margin: 0 10px;">|</span>```%```
4. ```+```<span style="margin: 0 10px;">|</span>```-```

### Operadores de Atribuição
 
- ``x += 2``
- ``x -= 2``
- ``x *= 2``
- ``x /= 2``
- ``x **= 2``
- ``x %= 2``

#### Operadores de Incremento e Decremento

Pós-incremento

- ``x++``
- ``x--``

Pré-incremento

- ``++x``
- ``--x``

### Operadores Relacionais

- ``<``  <span style="margin-left: 20px;">Menor</span>
- ``<=`` <span style="margin-left: 12px;">Menor ou igual</span>
- ``>`` <span style="margin-left: 20px;">Maior</span>
- ``>=`` <span style="margin-left: 12px;">Maior ou igual</span>
- ``==`` <span style="margin-left: 12px;">Igual</span>
- ``===`` <span style="margin-left: 4px;">Estritamente igual</span>
- ``!=`` <span style="margin-left: 12px;">Diferente</span>

> A diferença entre os operadores Estritamente Igual e Igual é que para que uma expressão usando o operador Estritamente Igual seja verdadeira é necessário que as variáveis sejam iguais e do mesmo tipo. Já quando se utiliza o operador Igual, basta que as variáveis sejam iguais - não precisam ser do mesmo tipo.

### Operadores Lógicos

- ``!`` <span style="margin-left: 20px;">Negação</span>
- ``&&`` <span style="margin-left: 12px;">Conjunção</span>
- ``||`` <span style="margin-left: 12px;">Disjunção</span>

### Operador Ternário

- ``<expressão> ? <verdadeiro> : <falso>``
> Exemplo: media >= 7 ? 'Aprovado' : 'Reprovado'
>
> O código acima irá verificar se a condição no primeiro bloco é verdadeira ou falsa e imprimira determinado valor dependendo do resultado.

### Precedência de Operadores

1. Aritméticos
2. Relacionais
3. Lógicos

## Tipos de Dados

O Javascript possui diversos tipos de dados. São eles: String, Number, Boolean, Undefined e Null. Estes 5 são os principais tipos de dados no Javascrip. Vejamos um pouco mais sobre cada um deles.

### String

O tipo de dado string refere-se ao texto. De forma mais precisa, string é um tipo de dado onde há um conjunto de caracteres. Toda string deve obrigatóriamente estar envolta entre aspas simples ou duplas. Há também como concatenar strings, ou seja, fazer a junção de uma string com outra, através do operador **+**.

```js
var nome = 'John'
var hello = 'Hello, ' + nome + ' . Bem-vindo de volta!'
```

> Repare que dependendo do valor das variáveis haverá uma concatenação ou soma. Se numa operação de soma alguma das variáveis for uma string, o que será realizado será uma concatenação. A soma só acontece com o tipo de dado Number.

Uma prática recorrente durante a codificação de qualquer algorítimo é a interpolação de valores, isto é, uma forma mais avançada e menos poluída de realizar a concatenação. Ela é realizada através do que chamamos de **template literals**.

```js
var nome = 'John'
var hello = `Hello, ${nome}. Bem-vindo de volta!`
```

A **template literals** é uma estrutura de código que permite a interpolação de variáveis dentro de um texto. Ela é definida pelos símbolos de acento grave. Vejamos abaixo alguns exemplos.

```js
var a = 'String normal com aspas simples'
```
```js
var b = "String normal com aspas duplas"
```

```js
var c = `Template Literals com a variável ${b} interpolada`
```

> Note que a interpolação de uma variável utilizando template literals começa com o símbolo de cifrão, seguido do nome da variável entre chaves.

### Number

Como o próprio nome indica, Number é tipo de dado que representa os números. Não há necessidade de envolvê-los com nenhum símbolo especial como acontece nas strings.

```js
var d = 3
```

### Boolean

O tipo de dado boolean trata-se de um valor lógico que pode representar **true** ou **false**. Este tipo de dado está muito presente nas estruturas condicionais que veremos mais adiante.

```js
var e = true
```

### Undefined

O tipo de dado undefined refere-se ao dado desconhecido. É visto com frequência quando tentamos exibir um valor inexistenten, de uma variável. Veja bem, a variável existe, mas seu valor ainda não. Vejamos um exemplo para compreender melhor.

```js
var f
console.log(a)
```

> Repare que a variável **f** não possui nenhum valor atribuído a ela. Logo, por padrão seu tipo de dado será undefined até que seja especificado o contrário.

### Null

O tipo de dado **null** é muito semelhante ao undefined. Entretanto, usamos o tipo de dado null para atribuir a variáveis que precisam de algun valor desde o início. Por mais que o valor seja nulo, ainda é um valor.

```js
var g = null
```

## Variáveis

Variáveis são espaços na memória que têm a utilidade de armazenar valores. Elas podem ser simples ou compostas.

### Variáveis Simples

Uma variável simples corresponde a uma única posição na memória. Dessa forma, caso seja necessário armazenar outro valor na mesma variável, o valor anterior será perdido.

```
var a = 1
```

### Variáveis Compostas

Uma variável composta é um conjunto de posições na memória que armazenam elementos, cada um contendo valor e indentificados por uma chave de indentificação/índice.

Variáveis compostas são conhecidas como vetor. No Javascript também são conhecidas como Array. Um array é identificado quando percebemos que há a abertura e fechamento de colchetes. Veja o exemplo abaixo:

```
var a = []
```

> O array acima é um array vazio. Além disso, é importante manter em mente que a contagem das posições/índice dos elementos de um array começa do 0 e não do 1.

### Regras para Nomeação de Variáveis

Para evitar que erros ocorram durante a execução de um script há algumas regras que devem ser seguidas sempre que uma nova variável estiver para ser definida.

1. Variáveis não podem ser nomeadas com palavras reservadas. As palavras reservadas são as palavras que o javascript por padrão utiliza. O exemplo a seguir é um erro:
```js
var var = 'Oi'
```
2. Variáveis não podem começar com números. O exemplo a seguir é um erro:
```js
var 1nome = 'John'
```
3. Nomes de variáveis não podem conter espaços em branco. O exemplo a seguir é um erro:
```js
var meu nome = 'John'
```

### Tipos de Variáveis no Javascript

Há três tipos de variáveis no Javascript: **Var**, **Let** e **Const**.

### Var

O tipo de variável **Var** é o mais antigo e está presente desde quando a linguagem Javascript foi idealizada. Seu escopo é global por conta de um processo conhecido como **Içamento** (Hoisting). Isto basicamente significa que as variáveis do tipo Var, mesmo sendo definidas dentro do escopo de uma classe ou função, estará disponível para uso por outras funções/métodos.

```js
var variavel = 1
```

### Let

O tipo de variável **Let** surgiu na especificação Ecmascript 2015 conhecida como ES6 juntamente com o tipo de variável Const.
Uma variável do tipo Let possui escopo local e só é visível dentro do escopo que foi definida. Dessa forma, se uma variável let for definida dentro de uma função ela só será existirá dentro dessa mesma função.
Além disso, assim como o tipo de variável Var ela permite ser sobrescrita.

```js
let variavel = 2
```

### Const

O tipo de variável **Const** também surgiu na especificação Ecmascript 2015. A diferença deste tipo de variável para a Let é que ela não pode ser alterada depois de criada. Daí o por quê de seu nome: Constante.

```js
const variavel = 3
```

## DOM (Document Object Model)

O Document Object Model é a estrutura que representa os elementos de um documento HTML ou XML. Ele é uma estrutura de dados hierárquica que segue o modelo de árvore. Dessa forma, os elementos são dispostos acima ou abaixo de outros elementos.

### Seleção de Elementos

A seleção de elementos no DOM pode ser feita por:

- Tag
    - getElementsByTagName()
- ID
    - getElementById()
- Nome
    - getElementsByName()
- Classe
    - getElementsByClassName()
- Seletor
    - querySelector()
    - querySelectorAll()

### Eventos DOM

Eventos DOM são ações que visam alterar comportamentos numa página web a fim de torná-la dinâmica - propósito do Javascript. Vejamos alguns eventos relacionados as ações de clique.

- click
- mouseenter
- mouseout

### Ouvinte de Eventos (Event Listener)

O Event Listener é um método utilizado para adicionar um bloco de código que ficará "escutando" quando determinado evento for acionado.

```
a.addEventListener('click', clicar)
```

## Condições

Condições são estruturas lógicas que nos permitem controlar o fluxo de um programa. Uma condição pode ser simples - possuindo apenas if - composta - possuindo mais if's e else's - ou múltipla - testando valores específicos com switch.

### Estruturas Condicionais no Javascript

- if/else
- switch

### Exemplos

- Condição simples

```js
if(true) {
    bloco de código a ser executado
}
```

- Condição composta

```js
if(true) {
    bloco de código a ser executado
} else {
    bloco de código a ser executado
}
```

> Outra forma de definir condições compostas é utilizando a combinação dos comandos else + if. Veja o exemplo logo abaixo.

```js
if(false){
    bloco de código a ser executado
} else if (false) {
    bloco de código a ser executado
} else if (true) {
    bloco de código a ser executado
} else {
    bloco de código a ser executado
}
```

- Condição múltipla

```js
switch(expressão) {
    case 0:
        bloco de código a ser executado
        break
    case 1:
        bloco de código a ser executado
        break
    case 2:
        bloco de código a ser executado
        break
    default:
        bloco de código a ser executado
}
```

> A condição múltipla feita com o comando switch testa a existência de valores específicos e que já tenhamos conhecimento.
>
> Um comando que não deve ser esquecido de forma alguma é o comando **break**. É ele quem encerra o fluxo do programa. Caso seja esquecido, os comandos seguintes também serão executados.

## Repetições

Em programação uma repetição é um bloco de código que se repete enquanto uma condição for verdadeira. As repetições são conhecidas como estruturas de repetição, laços de repetição ou iteração, isto é, todas referem-se a mesma coisa: repetição.

### Estruturas de Repetição no Javacript

- While
> Estrutura de repetição com teste lógico no início
- Do While
> Estrutura de repetição com teste lógico no final
- For
> Estrutura de repetição com variável de controle

## Funções

Funções são ações executadas assim que são chamadas ou em decorrência de algum evento. Há quatro pontos principais que permeiam quase toda função: **chamada,** **parâmetro**, **ação** e **retorno**.

```js
function name(param) {
    let action = param + 1
    return action
}

let consequence = name(param)
```

> A **chamada** corresponde à última linha do código acima, onde foi atribuida para a variável consequence.

> O **parâmetro** corresponde ao valor que é especificado dentro dos parênteses.

> A **ação** corresponde à execução daquilo pelo qual a função foi criada. No exemplo acima, realizar a soma do parâmetro informado e 1.

> O **retorno** corresponde ao resultado após a execução da função. Dessa forma, o retorno da função exemplo acima foi a soma realizada durante a **ação**.

### Função Recursiva

Função recursiva é uma função que chama a si mesma. Um bom exemplo de função recursiva é o cálculo do fatorial de um número.

```js
function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
```

## Objetos

Um objeto consiste na representação digital de algo do mundo real. Ele surge do paradigma de orientação a objetos. Cada objeto, portanto, assim como no mundo real, possui suas características e funções. Cabe a nós desenvolvedores definirmos quais características e funções um objeto terá.
No Javascript, basicamente tudo é considerado um objeto. Um objeto no Javascript é representado por um conjunto de chaves.

```js
let lamborghiniGallardo = {
    marca: 'Lamborghini',
    modelo: 'Gallardo',
    cor: 'Laranja',
}
```

O objeto acima consiste na representação de um carro esportivo da vida real, contendo suas características e funções devidamente descritas - obviamente de forma seletiva tendo em vista a dificuldade de representar todas as característicsa de um objeto.

Agora imagine que precisemos definir 50 objetos que representem carros. Seria bastante trabalhoso, concorda? Sendo assim, surge um novo conceito chamado de Construtor. O construtor na verdade é uma função que tem o objetivo de criar novos objetos. Vejamos abaixo sua sintaxe:

```js
function CarroEsportivo(marca, modelo, cor) {
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
}
```

A função construtora nos permite, portanto, criar diversos objetos a partir de um modelo comum. Vejamos como é a sintaxe de criação de um novo objeto a partir do construtor:

```js
let lamborghiniGallardo = new CarroEsportivo('Lamborghini', 'Gallardo', 'Preto')
```