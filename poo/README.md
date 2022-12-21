# Programação Orientada a Objetos

A disciplina tem como objetivo a exploração dos coneitos gerais do paradigma e da tecnologia.
São explorados conceitos básicos de orientação a objetos, os pilares de construção e a associação com a tecnologia, bem como o conceito de classes, atributos e métodos.

<br/>

## Aula 01 - Alessandro Valério


Programação Orientada a objetos é um **paradigma de programação** com foco em _objetos_ em vez de _funções_.

**Programação Estruturada** - Paradigma com foco em:

* Sequência = uma instrução executada após a outra
* Decisão   = uma instrução executada após algum teste lógico
* Iteração  = um trecho de código pode repetir após algum teste lógico


**Programação Procedural** - Paradigma com foco no uso de procedimentos e funções para facilitar o reuso:

```JavaScript
let numero1 = 10;
let numero2 = 20;

function add(n1, n2) {
    return n1 + n2;
}

let z = add(numero1, numero2);
console.log(z);
```

```JavaScript
let horaExtra = 100;
let qtHoras = 20;
let salarioFixo = 5000;

function calculaSalario(horaExtra, qtHoras) {
    return salarioFixo + (horaExtra * qtHoras);
}

let total = calculaSalario(horaExtra, qtHoras);
console.log(total);
```


**Programação Orientada a Objetos** - Paradigma com foco no uso de objetos, onde cada um contém suas variáveis e funções.

Variáveis ~ Atributos/Propriedades
Funções   ~ Métodos

Componentes de um obejto:

* Nome
* Atributos
* Métodos

_**Objeto** é uma coleção de **dados**(variáveis) e/ou **funcionalidades**(funções) com alguma relação entre si_

Em JavaScript, atributos e métodos são membros de um objeto, cada um com um nome e valor.

```JavaScript
var nomeObjeto = {
    nomeMembro1: 'valorMembro1',
    nomeMembro2: 'valorMembro2',
    nomeMembro3: 'valorMembro3'
};
```

```JavaScript
var pessoa = {
    nome: 'João',
    idade: 40,
    saudar: function() {
        console.log('Olá!');
    }
};
```

Estudo sobre conceitos de Classes (atributos, métodos, propriedade, visibilidade, instância ou classe).

Estudo sobre conceitos de Herança, Polimorfismo, Interfaces, Genéricos e Arrow functions.

Estudo sobre funções de filtragem, mapeamento e redução.

Estudos sobre construtores de tipos.

<br/>

## Aula 02 - Alessandro Valério

<br/>

## Aula 03 - Edson Moreno
