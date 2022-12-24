class Utils {
    static validarCPF(cpf) {
        return cpf == null || cpf == undefined ? false : cpf.toString().length === 11;
    }
};

const cpf = '12345678901';

console.log(`CPF ${cpf} é válido? : ${Utils.validarCPF(cpf)}`);