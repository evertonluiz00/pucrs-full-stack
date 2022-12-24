class Pessoa {
    constructor(nome, anoDeNascimento, profissao) {
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;
    };

    saudar() {
        console.log(`Olá, eu sou ${this.profissao} ${this.nome}, tenho ${this.calcularIdade()} anos.`);
    };

    calcularIdade() {
        return new Date().getFullYear() - this.anoDeNascimento;
    }
}

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, matricula) {
        super(nome, anoDeNascimento, "Estudante");
        this.matricula = matricula;
    };

    saudar() {
        super.saudar();
        console.log(`Minha matrícula é ${this.matricula}`);
    };
}

class Professor extends Pessoa {
    constructor(nome, anoDeNascimento, titulacao) {
        super(nome, anoDeNascimento, "Professor");
        this.titulacao = titulacao;
    };

    saudar() {
        super.saudar();
        console.log(`Minha titulação é ${this.titulacao}`);
    };
}

const pessoa1 = new Pessoa("João", 1990, "Programador");
const aluno1 = new Estudante("Maria", 1992, 562078);
const prof1 = new Professor("Marta", 1980, "Mestre")

console.log(pessoa1);
console.log(aluno1);
console.log(prof1);

pessoa1.saudar();
aluno1.saudar();
prof1.saudar();