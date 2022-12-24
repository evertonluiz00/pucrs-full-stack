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
var pessoa1 = {
    nome: 'João',
    idade: 40,
    saudar: function() {
        console.log('Olá!');
    }
};
```

```JavaScript
var pessoa2 = {
    nome: 'Maria',
    idade: 20,
    saudar: function() {
        console.log('Oi!');
    }
};
```

```JavaScript
console.log(pessoa1.nome);
console.log(pessoa1['nome']);

console.log(pessoa2.idade);
console.log(pessoa2['idade']);

pessoa1['nome'] = 'Juca';
pessoa1.idade = 10;

pessoa1.saudar();
pessoa1.saudar = function() {
    console.log('Opa!!');
}
```

JavaScript possui dois **Tipos de Dados**

* Tipos de valor (Primitivos) : representação de valores _imutáveis_
  - Number
  - String
  - Boolean
  - Symbol
  - undefined
  - null
* Tipos de referência : representação de valores _mutáveis e complexos_
  - Object (Object, Function, Array)


### Conceitos

* Encapsulamento
  - Permitir que atributos e métodos sejam **agrupados** de certa forma em uma **interface bem definida** para manipular os dados de um objeto de forma eficiente
  - **Isolamento** entre partes de um programa
  - Saber **o que um objeto faz** e não como ele faz
  - **Proteção** de atributos
* Abstração
  - POO é **amplamente baseada** na abstração digital da vida real
  - **Objetos** são representações/abstrações do que queremos implementar do que observamos no mundo ao nosso redor
  - Buscamos o **essencial** e deixamos de lado o que não importa, _focamos no que realmente precisamos representar em nossos objetos_
* Herança
  - Permite o **compartilhamento** de atributos e métodos entre objetos
  - _Reaproveita código_ e _agrupa o que é comun_ a diferentes objetos
  - Busca identificar e agrupar **comportamentos generalizados** ou **especializados**
  - Ajuda a eliminar **redundâncias**
* Polimorfismo
  - Através da _herança_ é possível **alterar um comportamento herdado** de um objeto-pai
  - Permite uma forte **separação de interesses**
  - **Limpeza de código**, removendo lógica excedente
  - **Sobrescrita**: métodos com o _mesmo nome e assinatura_ em **diferentes objetos** relacionados por **herança**
  - **Sobrecarga**: métodos com o _mesmo nome_ mas **diferentes assinaturas** em **diferentes objetos** relacionados por **herança**

JavaScript não suporta sobrecarga de métodos


### Criando Objetos

* Literais

```JavaScript
var nomeObjeto = {
    nomeMembro1: 'valorMembro1',
    nomeMembro2: 'valorMembro2',
    nomeMembro3: 'valorMembro3'
};
```

* Fábricas
  - funções que criam e retornam objetos

```JavaScript
function criarPessoa(nome, anoDeNascimento) {
  return {
    nome: nome,
    anoDeNascimento: anoDeNascimento
  };
};

const pessoa = criarPessoa('Nome', 1990);
```

* Construtores
  - funções que criam obejtos

```JavaScript
function Pessoa(nome, anoDeNascimento) {
  this.nome = nome
  this.anoDeNascimento = anoDeNascimento
};

const pessoa = new Pessoa('Nome', 1990);
```

* Protótipos
  - mecanismo de herança no JavaScript
  - um objeto de protótipo pode ter outro objeto (e assim por diante)
  - é a chamada _cadeia de protótipos_

```JavaScript
Object.getPrototypeOf(pessoa);
```

* Classes
  - modelos para criar objetos

```JavaScript
class Pessoa {
  constructor(nome, anoDeNascimento) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
  }
};

const pessoa = new Pessoa('Nome', 1990);
```

* [Exemplo de Classe Pessoa e Herança](./classePessoa.js)


**Membros e suas propriedades**: atributos e métodos podem ser de objetos ou estáticos
* de objetos
  - cada objetos possui o seu
  - é necessário criar/instanciar um objeto para pode usar
* estáticos
  - são compartilhados, pois possui lógica que é executada da mesma maneira em qualquer objeto de um tipo ou classe
  - não é necessário ter uma instancia do objeto para usar
  - métodos utilitários, independentes de objetos
  - [Exemplo de método estático](./utils.js)


**Visibilidade**: Atributos e métodos podem ser:
* Públicos
* Privados
* Protegidos

<br/>

## Aula 02 - Alessandro Valério

<br/>

## Aula 03 - Edson Moreno
