console.log("============================");

console.log("Array Every");
const a = [5,7];
console.log(a);

console.log("---");


const regraPar = (item) => item%2 == 0;
console.log("Todos os números são par? " + a.every(regraPar));


console.log("---");


const regraPrimo = (item) => {
    let ndiv = 0;
    for (let divisor = 1; divisor <= item; divisor++) {
        if ((item % divisor) == 0) {
            ndiv++;
        }
    }

    return ndiv == 2;
};
console.log("Todos os números são primos? " + a.every(regraPrimo));

console.log("============================");