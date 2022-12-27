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


<br/>

## Aula 02 - Alessandro Valério

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

## Aula 03 - Edson Moreno


### Objetos

Conjuntos diferentes de objetos são disponibilizados:
* Intrínsecos ao JavaScript
  - Array, Boolean, Date, Math, Number, String, RegExp, Global
* Fornecidos pelo navegador
  - Window, Navigation, Screen, History, Location, Console
* Fornecidos pela API DOM
  - Document, Event, etc

Cada objeto possui métdos e propriedades

### Funções

* Definidas com a palavra reservada _function_
* Pode possuir um nome
  - Existe o conceito de função anônima
* Pode ter argumentos e retornar valor
  - A passagem de parâmetros é por valor
  - O número de parâmetros passados não é verificado

#### Além da função básica

* JavaScript não é uma linguagem de programação funcional, mas...
  - Permite manipular funções como objetos, logo ...
  - Pode-se usar técnicas de programação funcional em JS
* Métodos de array do The ECMAScript 5 tais como map() e reduce()
  - Prestam-se a tal estilo de programação funcional
* Em JavaScript, funções podem ser manipuladas assim como valores
  - Pode-se atribuir a variáveis
  - Pode-se passar a função como parâmetro de outra função
  - Pode-se retornar uma função como valor de retorno de outra função, etc
* Uma forma alterantiva de definir funções é através de expressões:
```JavaScript
let identificador = function (lista de parâmetros) { bloco de comandos };
```
* Outra forma alterantiva de definir funções é através de "expressões lambda":
```JavaScript
let identificador = (lista de parâmetros) => expressão;
```
```JavaScript
let identificador = (lista de parâmetros) => { bloco de comandos };
```

#### Funções de fechamento (closure)

* Função que se "lembra" do ambinete em que ele foi criada
* Permite associar dados do ambiente com uma função que trabalha estes dados
  - Execução com contexto
  - Diretamente ligado com programação orientada a obejtos


#### Funções de seta (arrow functions)

* Sintaxe mais curta quando comparada a uma função
* Restrições
  - Melhora aplicadas para funções que não sejam métodos
  - Não podem ser usadas como construtoras de objetos


#### Funções de alta ordem

Explorar funções de transformação sobre arrays com arrow functions

* Array.some()
  - sinaliza se ao menos um dos elementos do array atende a regra
  - [Exemplo de array.some](./arraySome.js)
* Array.every()
  - sinaliza se todos os elementos do arrasy atendem a regra
  - [Exemplo de array.every](./arrayEvery.js)
* Array.filter()
  - retorna um novo array com a lista de itens que atende a regra
  - [Exemplo de array.filter](./arrayFilter.js)
* Array.foreach()
  - itera sobre cada um dos itens da lista, aplicando alguma ação
* Array.reduce()
  - acumula itens do array conforme uma regra
  - [Exemplo de array.reduce](./arrayReduce.js)
* Array.map()
  - permite transformar os elementos da lista
  - [Exemplo de array.map](./arrayMap.js)


### Modularização

* É extremanente conveniente dividir e organizar código em módulos
  - Um módulo é um agrupamento de código que provê funcionalidade para outros módulos utilizarem (sua interface) e especifica outros módulos que ele utiliza (suas dependências)
* Benefícios
  - Facilita a organização e a distribuição de blocos de funções e objetos relacionados
  - Permite a reutilização de código
  - Provê um "espaço de nomes" para evitar o compartilhamento de variáveis globais
* Diferentes padrões para implementação de módulos
  - CommonJS
  - Asynchronous Module Definition
  - Universal Module Definition
  - ECMAScript 6 Modules

#### CommonJS

* Característica
  - Padrão utilizado por um grande número de pacotes disponibilizados via NPM
  - Ambiente de execução do NodeJS suporta o padrão CommonJS
* Módulos que contém as definições
  - Definem suas interfaces via exports e module.exports
  - Usa-se **exports** para adicionar propriedades ao objeto criado automaticamente pelo sistema de módulos
  - Usa **module.exports** para definir o próprio objeto a ser retornado
* Dependências para outros modulos são importadas via função **require**

#### ESCMAScript 6 (ES6)

* Padrão nativo do JavaScript disponível a partir do ECMAScript 6  (2015)
* Ambiente de execução do NodeJS suporta o padrão ES6
  - Flag --experimental-modules ao executar Node
* Módulos definem suas interfaces via palavra-chave **_export_**
  - Pode-se exportar múltiplas funções, classes, let, const, var
  - Vinculação de exportação default é tratada como elemento principal do módulo
* Dependências para outros módulos são importadas via palavra-chave **_import_**
  - Importar um nome a partir do módulo, importa a exportação default
  - Importar com sintaxe de desestruturação {} permite importar elementos indicados
  - Importar com * importa o módulo inteiro
  - Importaçãoes com {} ou * permite modificar o nome do que foi importado via operador **_as_**


### Desestruturação

* A ideia é "desempacotar" algo em vários "pedaços"
* A desestruturação é aplicável, por exemplo em:
  - Módulos importados
  - Arrays
  - Obetos
  - etc


### JSON

* JSON = JavaScript Object Notation
* Formato textual para serialização de dados
  - É independente de linguagem
  - Muito utilizado para retorno de Serviços Web Rest
* JSON é capaz de representar
  - Tipos primitivos: strings, números, booleanos, null
  - Tipos estruturados: objetos, arranjos
* JavaScript provê o método JSON.stringfy
  - Converte um objeto para o formato JSON (string)
  - Cuidado: não pode existir referências circulares dentro do objeto
* JavaScript provê o método JSON.parse para converter uma string no formato JSON em um objeto
  - Cuidado: não assuma que a conversão suporta qualquer tipo (Date, por exemplo)


### Exceções

* Falhas nas condições podem ser indicadas ao programador através do conceito de exceções
* Quando uma função encontra uma situação anormal, ele informa tal anormalidade eplo lançamento (geração) de uma exceção
  - Ex: a função JSON.parse(string), irá lançar uma exceção SyntaxError se o formato do objeto JSON for incorreto
* Quando um bloco de código tenta detectar uma situação anormal, ele captura essa exeção, possivelmente indicando que irá realizar o tratamento do probelma encontrado


### Funções Assíncronas

