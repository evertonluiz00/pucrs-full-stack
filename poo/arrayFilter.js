console.log("============================");

console.log("Array Filter");
const a = [4,5,6,7,8,9,10];
console.log(a);

console.log("---");


const regraPar = (item) => item%2 == 0;
console.log("Números pares filtrados: " + a.filter(regraPar));


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
console.log("Números primos filtrados: " + a.filter(regraPrimo));

console.log("============================");