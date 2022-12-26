console.log("============================");

console.log("Array Some");
const a = [4,6,8,9,10];
console.log(a);

console.log("---");


const regraPar = (item) => item%2 == 0;
console.log("Há algum número par? " + a.some(regraPar));


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
console.log("Há algum número primo? " + a.some(regraPrimo));

console.log("============================");