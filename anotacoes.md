# Anotações

Javascript é uma linguagem de programação interpretada, multiparadigma e com tipagem dinâmica. Foi criada em 1995 por Brendan Eich.

## Operadores

- Aritméticos
- Atribuição
- Relacionais
- Lógicos
- Ternário

### Operadores Aritméticos

- ```+``` <span style="margin-left: 20px;">Adição</span>
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

Você pode verificar o uso da seleção de elementos nos seguintes exercícios:

- ex005
- ex006
- ex007
- ex010
- ex011
- ex015
- ex016
- ex018

### Eventos DOM

Eventos DOM são ações que visam alterar comportamentos numa página web a fim de torná-la dinâmica - propósito do Javascript. Vejamos alguns eventos relacionados as ações de clique.

- click
- mouseenter
- mouseout

Você pode verificar o uso de eventos nos seguintes exercícios:

- ex006
- ex007
- ex010
- ex011
- ex015
- ex016
- ex018

### Ouvinte de Eventos (Event Listener)

O Event Listener é um método utilizado para adicionar um bloco de código que ficará "escutando" quando determinado evento for acionado.

```
a.addEventListener('click', clicar)
```

Você pode verificar o uso do event listener nos seguintes exercícios:

- ex006

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

Você pode verificar o uso de condições nos seguintes exercícios:

- ex008
- ex009
- ex010
- ex011
- ex012
- ex013
- ex014
- ex015
- ex016
- ex018

## Repetições

Em programação uma repetição é um bloco de código que se repete enquanto uma condição for verdadeira. As repetições são conhecidas como estruturas de repetição, laços de repetição ou iteração, isto é, todas referem-se a mesma coisa: repetição.

### Estruturas de Repetição no Javacript

- While
> Estrutura de repetição com teste lógico no início
- Do While
> Estrutura de repetição com teste lógico no final
- For
> Estrutura de repetição com variável de controle

Você pode verificar o uso de estruturas de repetição nos seguintes exercícios:

- ex017
- ex018