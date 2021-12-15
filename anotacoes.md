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